import { addRoom } from "../api/adminAPI";
import { AddRoomType } from "../constants/adminConstants";

export const addRoomAction = async (room: AddRoomType) => {
    const { error, data } = await addRoom(room);
    if (error) {
      throw new Error(error);
    }
    return data;
  };