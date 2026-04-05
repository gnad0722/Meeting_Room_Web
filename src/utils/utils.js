function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
const getPageName = (pathname) => {
  if (pathname === "/home") return "Dashboard";
  if (pathname === "/about-us") return "About us";
  if (pathname === "/login" || pathname === "/signup" || pathname === "/") {
    return "";
  }

  return "Meeting Room";
};
const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  const pad = (n) => n.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const updateStatistics = (Statistics, bookings) => {
  const today = new Date().toISOString().split("T")[0];

  const totalBookings = bookings.length;
  const confirmCount = bookings.filter(b => b.status === "confirmed").length;
  const cancelCount = bookings.filter(b => b.status === "cancelled").length;
  const todayCount = bookings.filter(b => b.date === today).length;

  Statistics.forEach((item) => {
    if (item.title === "Total Meeting Rooms") {
      item.number = totalBookings; 
    } else if (item.title === "Confirm Booking") {
      item.number = confirmCount;
    } else if (item.title === "Cancel Bookings") {
      item.number = cancelCount;
    } else if (item.title === "Today's Bookings") {
      item.number = todayCount;
    }
  });
};
const groupByDate = (notifications) => {
  const groups = {};

  const today = new Date().toDateString();

  notifications.forEach((noti) => {
    const date = new Date(noti.created_at);
    const dateKey = date.toDateString();

    let label;

    if (dateKey === today) {
      label = "Today";
    } else {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = String(date.getFullYear()).slice(-2);
      label = `${d}/${m}/${y}`;
    }

    if (!groups[label]) {
      groups[label] = [];
    }

    groups[label].push(noti);
  });

  return groups;
};

const countUnread = (notifications) => {
  return notifications.filter(n => !n.is_read).length;
};
const updateStatusById = (data, id, newStatus) => {
  console.log(data, id, newStatus);
  return data.map(item => 
    item.id === Number(id) ? { ...item, status: newStatus } : item
  );
};
export default { formatDate, getPageName, formatDateTime, updateStatistics, groupByDate, countUnread, updateStatusById };