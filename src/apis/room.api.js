import { axiosClient, API_BASE } from "./axiosClient.js";

const getAllRooms = async ({
  keyword = "",
  capacity,
  amenities,
  date,
  startTime,
  endTime,
  page = 1,
  limit = 9,
}) => {
  const response = await axiosClient.get("/room", {
    params: {
      keyword,
      capacity,
      amenities,
      date,
      startTime,
      endTime,
      page,
      limit,
    }
  });
  return response.data;
};

const getRoomById = async (roomId) => {
  const response = await axiosClient.get(`/room/${roomId}`);
  return response.data;
};
const getRoomsByAdId = async (adId,keyword ="") => {
  const response = await axiosClient.get(`/room/admin/${adId}?keyword=${keyword}`);
  return response.data;
}

const addRoom = async (name,location,capacity, admin_id, amenities, image) => {
   console.log("data:", { name, location, capacity, admin_id, amenities, image });
  const formData = new FormData();
  formData.append("name", name);
  formData.append("location", location);
  formData.append("capacity", capacity);
  formData.append("admin_id", admin_id);
  formData.append("amenities", JSON.stringify(amenities));
  formData.append("image", image);
  const response = await axiosClient.post("/room", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const updateRoom = async (roomId, name, location, capacity, amenities, formFile) => {
  console.log("data:", { roomId, name, location, capacity, amenities, formFile });
  
  const formData = new FormData();
  
  formData.append("name", name);
  formData.append("location", location);
  formData.append("capacity", capacity);

  formData.append("amenities", JSON.stringify(amenities));
  formData.append("image", formFile);

  
  const response = await axiosClient.put(`/room/${roomId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

const deleteRoom = async (roomId) => {
  const response = await axiosClient.delete(`/room/${roomId}`);
  return response.data;
};

export default {
  getAllRooms,
  getRoomById,
  getRoomsByAdId,
  addRoom,
  updateRoom,
  deleteRoom,
};