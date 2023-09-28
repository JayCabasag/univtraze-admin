import { AddRoomType } from "../constants/adminConstants";
import { ADMIN_API, handleApiError } from "./utils";

export const addRoom = async (room: AddRoomType) => {
    const payload = {
        "building_number": room.buildingNumber,
        "building_name": room.buildingName,
        "room_number": room.roomNumber,
        "room_name": room.roomName
    }

    try {
      const res = await ADMIN_API.post('/rooms', payload);
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error as Error);
    }
  };