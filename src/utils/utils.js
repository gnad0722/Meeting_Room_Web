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
export default { formatDate, getPageName, formatDateTime, updateStatistics };
