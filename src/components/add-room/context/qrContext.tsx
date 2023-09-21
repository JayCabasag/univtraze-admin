import { createContext, useContext, useState } from 'react';

export const QrContext = createContext<{ payload: string; handleUpdate: (_value: string) => void }>({
  payload: '',
  handleUpdate: () => {},
});

export const useQrContext = () => useContext(QrContext);

export const QrContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [qrContextPayload, setQrContextPayload] = useState('');

  const handleUpdate = (value: string) => {
    setQrContextPayload(value);
  };

  return <QrContext.Provider value={{ payload: qrContextPayload, handleUpdate }}>{children}</QrContext.Provider>;
};
