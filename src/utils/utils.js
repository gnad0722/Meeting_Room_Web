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
export default { formatDate, getPageName };
