import roomApi from "../apis/room.api.js";

const getAllRooms = async (query) => {
  const {
    keyword = "",
    capacity,
    amenities,
    date,
    startTime,
    endTime,
    page = 1,
    limit = 9,
  } = query;
 
  
  const response = {
    success: true,
    listErr: [],
  };
  try {
    
    const data = await roomApi.getAllRooms({
      keyword,
      capacity,
      amenities,
      date,
      startTime,
      endTime,
      page,
      limit,
    });
    
    return data;
  } catch (error) {
    response.success = false;
    console.log(error.message);
    throw new Error(error.message);
  }
};

const getRoomsByAdId = async (admin_id, keyword = "") => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await roomApi.getRoomsByAdId(admin_id, keyword);
    return data;
  } catch (error) {
    response.success = false;
    console.log(error.message);
    throw new Error(error.message);
  }
};

const updateRoom = async (
  roomId,
  name,
  location,
  capacity,
  amenities,
  image,
) => {
  const response = {
    success: true,
    listErr: [],
    data: null,
  };
  try {
    console.log("Updating room with data:", {
      roomId,
      name,
      location,
      capacity,
    });
    const roomData = await roomApi.updateRoom(
      roomId,
      name,
      location,
      capacity,
      amenities,
      image,
    );
    response.data = roomData;
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 400) {
      const errors = Err.response.data.errors;
      errors.forEach((err) => {
        response.listErr.push({
          path: err.path,
          msg: err.msg,
        });
      });
    } else console.error(Err);
  }
  return response;
};

const createRoom = async (
  name,
  location,
  capacity,
  admin_id,
  amenities,
  image,
) => {
  const response = {
    success: true,
    listErr: [],
    data: null,
  };
  try {
    const data = await roomApi.addRoom(
      name,
      location,
      capacity,
      admin_id,
      amenities,
      image,
    );
    response.data = data;
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 400) {
      const errors = Err.response.data.errors;
      errors.forEach((err) => {
        response.listErr.push({
          path: err.path,
          msg: err.msg,
        });
      });
    } else console.error(Err);
  }
  return response;
};

const getRoomByRoomId = async (roomId) => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await roomApi.getRoomById(roomId);
    return data;
  } catch (error) {
    response.success = false;
    console.log(error.message);
    throw new Error(error.message);
  }
};

export default { getRoomsByAdId, updateRoom, createRoom, getAllRooms, getRoomByRoomId };
