import { useEffect, useRef, useState, useCallback } from "react";
import notiService from "../services/noti.service";
import utils from "../utils/utils.js";
import { socket } from "../services/socket.js";
const NotificationPopup = ({ open, onClose, wrapperRef, setUnreadCount }) => {
  const popupRef = useRef();
  const listRef = useRef();

  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [hasNew, setHasNew] = useState(false);  
  const handleMarkAsRead = async (notiId) => {
    try {
      await notiService.maskAsRead(notiId);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notiId ? { ...n, is_read: true } : n)),
      );
      setUnreadCount((prev) => prev - 1);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchNotifications = async (pageNumber) => {
    try {
      setLoading(true);

      const data = await notiService.getNotifications(pageNumber);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setNotifications((prev) => [...prev, ...data]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      setNotifications([]);
      setPage(1);
      setHasMore(true);
      fetchNotifications(1);
    }
  }, [open]);

  useEffect(() => {
    if (page > 1) {
      fetchNotifications(page);
    }
  }, [page]);

  const handleScroll = (e) => {
    const el = listRef.current;
    if (!el || loading || !hasMore) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setPage((prev) => prev + 1);
    }
    if (e.target.scrollTop === 0) {
      setHasNew(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setHasNew(false);
        onClose();
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, onClose]);
  const handleNewNotification = useCallback((data) => {
    setNotifications((prev) => [data, ...prev]);
    setUnreadCount((prev) => prev + 1);
    setHasNew(true);
  }, []);
  useEffect(() => {
    socket.on("newNotification", handleNewNotification);
    return () => socket.off("newNotification", handleNewNotification);
  }, []);
  if (!open) return null;

  const grouped = utils.groupByDate(notifications);
  return (
    <div className="notification-popup" ref={popupRef}>
      <div className="notification-header">
        <span>Notificatons</span>
        {hasNew && (
          <span
            onClick={() => {
              setHasNew(false);
            }}
            className="has-new"
          >
            You have a new notification
          </span>
        )}
      </div>

      <div className="notification-list" ref={listRef} onScroll={handleScroll}>
        {Object.keys(grouped).length === 0 ? (
          <div className="notification-empty">No notifications</div>
        ) : (
          Object.entries(grouped).map(([date, items]) => (
            <div key={date}>
              {/* Header ngày */}
              <div className="notification-date">{date}</div>

              {/* List item */}
              {items.map((n) => (
                <div
                  key={n.id}
                  className="notification-item"
                  onClick={() => handleMarkAsRead(n.id)}
                >
                  {!n.is_read ? (
                    <span className="noti-dot"></span>
                  ) : (
                    <span
                      className="noti-dot"
                      style={{ backgroundColor: "gray" }}
                    ></span>
                  )}

                  <span className="noti-content">{n.content}</span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
