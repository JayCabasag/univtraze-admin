import { createContext, useContext, useState } from 'react';
import { FormValues } from '../AddRoomForm';

export const QrContext = createContext<{ payload: FormValues; handleUpdate: (_value: FormValues) => void, isValidPayload: boolean }>({
  payload: {
    roomNumber: '',
    roomName: '',
    buildingNumber: '',
    buildingName: '',
  } as FormValues,
  handleUpdate: () => {},
  isValidPayload: false
});

export const useQrContext = () => useContext(QrContext);

export const QrContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [qrContextPayload, setQrContextPayload] = useState<FormValues>({
    roomNumber: '',
    roomName: '',
    buildingNumber: '',
    buildingName: '',
  });

  const [isValidPayload, setIsValidPayload] = useState<boolean>(false);

  const handleUpdate = (value: FormValues) => {
    setQrContextPayload(value);
    setIsValidPayload(true)
  };

  return <QrContext.Provider value={{ payload: qrContextPayload, handleUpdate, isValidPayload }}>{children}</QrContext.Provider>;
};
