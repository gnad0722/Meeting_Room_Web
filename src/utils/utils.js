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
  if (pathname === "/about-us" ) return "About us"
  if (
    pathname === "/login" ||
    pathname === "/signup"
  ) {
    return "";
  }

  return "Meeting Room";
};
const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  const pad = (n) => n.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
export default { formatDate, getPageName, formatDateTime };
