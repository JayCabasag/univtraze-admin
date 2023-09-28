import QRCode from 'react-qr-code';
import { useQrContext } from './context/qrContext';
import { encode } from "js-base64"

export default function AddRoomPreview() {
  const isSubmitting = false;
  const qrContext = useQrContext();
  const payload = qrContext.payload

  const isValidPayload = true; 
  const encodedQRPayload = encode(JSON.stringify(payload))

  const handleSubmit = () => {
    console.log('Submitted')
  }

  return (
    <div className="flex flex-col p-[15px]">
      <h2 className="text-[28px] uppercase font-bold text-[#364D39]">Add room</h2>
      <div className="min-h-[320px] py-[20px] flex w-full items-center justify-center">
        {isValidPayload && <QRCode value={encodedQRPayload} />}
        {!isValidPayload && <h1 className="text-xl text-center">Generated QR Code will appear here...</h1>}
      </div>
      <button
        disabled={isSubmitting}
        className=" self-center w-full max-w-[370px] h-[44px] mt-[20px] text-white text-[16px] font-bold shadow-md rounded-[10px] bg-gradient-to-b from-[#6BF27F] to-[#28cd41]"
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Please wait...' : 'Add Room'}
      </button>
    </div>
  );
}
