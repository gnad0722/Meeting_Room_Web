import { useEffect, useRef, useState } from "react";
import notiService from "../services/noti.service";
import utils from "../utils/utils.js";
const NotificationPopup = ({ open, onClose, wrapperRef, setUnreadCount }) => {
  const popupRef = useRef();
  const listRef = useRef();

  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
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

  const handleScroll = () => {
    const el = listRef.current;
    if (!el || loading || !hasMore) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
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

  if (!open) return null;
  const grouped = utils.groupByDate(notifications);
  return (
    <div className="notification-popup" ref={popupRef}>
      <div className="notification-header">Notifications</div>

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
