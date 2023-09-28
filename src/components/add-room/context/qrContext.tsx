import { createContext, useContext, useState } from 'react';
import { FormValues } from '../AddRoomForm';

export const QrContext = createContext<{ payload: FormValues; handleUpdate: (_value: FormValues) => void }>({
  payload: {
    roomNumber: '',
    roomName: '',
    buildingNumber: '',
    buildingName: '',
  } as FormValues,
  handleUpdate: () => {},
});

export const useQrContext = () => useContext(QrContext);

export const QrContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [qrContextPayload, setQrContextPayload] = useState<FormValues>({
    roomNumber: '',
    roomName: '',
    buildingNumber: '',
    buildingName: '',
  });

  const handleUpdate = (value: FormValues) => {
    setQrContextPayload(value);
  };

  return <QrContext.Provider value={{ payload: qrContextPayload, handleUpdate }}>{children}</QrContext.Provider>;
};
