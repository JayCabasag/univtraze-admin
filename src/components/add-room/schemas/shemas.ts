import * as yup from 'yup';

export const addRoomSchema = yup.object().shape({
  roomNumber: yup.string().matches(/^[0-9-]+$/, 'Room number must contain only numbers').required('Room number is required'),
  roomName: yup.string().required('Room name is required'),
  buildingNumber: yup.string().matches(/^[0-9-]+$/, 'Room number must contain only numbers').required('Building number is required'),
 buildingName: yup.string().required('Building name is Required')
});
