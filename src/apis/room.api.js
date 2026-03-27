import { axiosClient, API_BASE } from "./axiosClient.js";

const getAllRooms = async () => {
  const response = await axiosClient.get("/room");
  return response.data;
};

const getRoomById = async (roomId) => {
  const response = await axiosClient.get(`/room/${roomId}`);
  return response.data;
};
const getRoomsByAdId = async (adId) => {
  const response = await axiosClient.get(`/room/admin/${adId}`);
  return response.data;
}

const addRoom = async (name,location,capacity, admin_id, amenities, images) => {
  const roomData = {
    name,
    location,
    capacity,
    admin_id,
    amenities,
    images
  };
  const response = await axiosClient.post("/room", roomData);
  return response.data;
};

const updateRoom = async (roomId, name, location, capacity, amenities, images) => {
  const roomData = {
    name,
    location,
    capacity,
    amenities,
    images
  };
  const response = await axiosClient.put(`/room/${roomId}`, roomData);
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