# Meeting_Room_Web

Ứng dụng quản lý đặt phòng họp (Meeting Room Booking System) được xây dựng bằng React và API REST.

## 🌟 Link demo
- [Demo sẽ được cập nhật ở đây](#)

## 🔎 Mô tả

Meeting_Room_Web là nền tảng quản lý đặt phòng họp cho doanh nghiệp, mục tiêu giúp:

- Người dùng tìm kiếm phòng họp theo tên, sức chứa, thiết bị.
- Đặt phòng theo giờ hoặc theo hình thức lặp lại (hằng ngày/hằng tuần/hằng tháng) với lịch trực quan.
- Thông báo và hiển thị trạng thái booking: chờ duyệt, đã duyệt, từ chối, đã hủy.
- Quản lý yêu cầu booking, thêm ghi chú và thông tin số người tham dự.
- Admin quản trị phòng: thêm mới, chỉnh sửa, xóa, cài đặt tiện ích (máy chiếu, wifi, bảng trắng).
- Xem lịch trình của từng phòng và trạng thái từng khoảng thời gian (bận/rảnh).
- Định danh người dùng với JWT và bảo vệ route (chỉ người đã đăng nhập mới đặt hoặc xem dashboard).

### Luồng chức năng chính

1. User đăng ký / đăng nhập.
2. Người dùng duyệt list phòng, mở chi tiết phòng.
3. Chọn ngày/giờ và gửi yêu cầu booking.
4. Admin duyệt hoặc từ chối, hệ thống gửi trạng thái.
5. User xem lịch cá nhân và lịch toàn bộ phòng.

## 🧩 Công nghệ

- React (Create React App) + JSX
- React Router DOM cho điều hướng đa trang (`react-router-dom`).
- Quản lý trạng thái toàn cục: React Context API (`AuthContext`).
- Gọi HTTP API: Axios + `src/apis/axiosClient.js`.
- API endpoints phân tách trong `src/apis/auth.api.js`, `src/apis/booking.api.js`.
- Logic nghiệp vụ: `src/services/auth.service.js`, `src/services/booking.service.js`.
- CSS: file scss/định dạng CSS thuần trong `src/assets/styles/*.css`.
- Component UI tái sử dụng: `src/components/RoomCard.jsx`, `BookingForm.jsx`, `Schedule.jsx`, `StatusPopup.jsx`.
- Lưu token vào localStorage (ghi nhớ phiên) và tự động đính kèm authorization header.
- Responsive design cho mobile/tablet/desktop.
- Chuẩn code: ES6+, async/await, Promise, destructuring, optional chaining.

## 📁 Cấu trúc chính

- `src/index.js` - entry point
- `src/App.jsx` - cấu hình route
- `src/context/AuthContext.js` - xác thực và context user
- `src/apis/*` - các wrapper API
- `src/services/*` - business logic
- `src/components/*`, `src/pages/*` - giao diện và chức năng

## 📁 Cấu trúc chính

- `src/index.js` - entry point
- `src/App.jsx` - cấu hình route
- `src/context/AuthContext.js` - xác thực và context user
- `src/apis/*` - các wrapper API
- `src/services/*` - business logic
- `src/components/*`, `src/pages/*` - giao diện và chức năng

## 🚀 Chạy dự án

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy môi trường phát triển:

```bash
npm start
```

3. Build production:

```bash
npm run build
```

---

## 🛠 Lưu ý chạy

- Kiểm tra `baseURL` trong `src/apis/axiosClient.js` để trỏ tới backend đúng.
- Nếu cần cấu hình biến môi trường `REACT_APP_API_URL`, hãy đặt trong `.env`.
- Backend chưa có trong repo, cần triển khai API phù hợp.

## 🧾 Ghi chú

- Cập nhật link demo khi triển khai xong.
- Nếu cần bổ sung hướng dẫn API, có thể thêm mục `API Endpoints`.
