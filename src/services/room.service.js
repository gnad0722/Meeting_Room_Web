import roomApi from "../apis/room.api.js";

const getAllRooms = async () => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await roomApi.getAllRooms();
    return data;
  } catch (error) {
    response.success = false;
    console.log(error.message);
    throw new Error(error.message);
  }
};

const getRoomsByAdId = async (admin_id,keyword ="") => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await roomApi.getRoomsByAdId(admin_id,keyword);
    return data;
  } catch (error) {
    response.success = false;
    console.log(error.message);
    throw new Error(error.message);
  }
};

const updateRoom = async (roomId, name, location, capacity, amenities, image) => {
    const response = {
        success: true,
        listErr: [],
    }
    try {
        const roomData = await roomApi.updateRoom(roomId, name, location, capacity, amenities, image);
        return roomData;
    }
    catch (error) {
        response.success = false;
        console.log(error.message);
        throw new Error(error.message);
    }
};

const createRoom = async (name, location, capacity, admin_id, amenities, image) => {
    const response = {
        success: true,
        listErr: [],
    }
    try {
      const data = await roomApi.addRoom(name, location, capacity, admin_id, amenities, image);
      return data;
    } catch (error) {
        response.success = false;
        console.log(error.message);
        throw new Error(error.message);
    }
};

    

export default {getRoomsByAdId, updateRoom, createRoom, getAllRooms};
