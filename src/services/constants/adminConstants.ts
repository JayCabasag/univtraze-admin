export type AdminSignInType = {
  email: string;
  password: string;
  type: 'admin';
};

export type AddRoomType = {
  roomNumber: String,
  roomName: String,
  buildingNumber: String,
  buildingName: String,
}