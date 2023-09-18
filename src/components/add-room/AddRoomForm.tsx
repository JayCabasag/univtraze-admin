import { yupResolver } from '@hookform/resolvers/yup';
import { FieldErrors, useForm } from 'react-hook-form';
import { addRoomSchema } from './schemas/shemas';
import { cn } from '@/utils/formatters';

interface FormValues {
    roomNumber: string;
    roomName: string;
    buildingNumber: string;
    buildingName: string;
  }
  

export default function AddRoomForm() {
    const form = useForm<FormValues>({
        defaultValues: {
            roomNumber: '',
            roomName: '',
            buildingNumber: '',
            buildingName: ''
        },
        resolver: yupResolver(addRoomSchema),
      });
    
      const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = form;
      
      const onSubmit = (data: FormValues) => {
        console.log(data)
      }

      const onError = (errors: FieldErrors) => {
        console.log(errors)
      }

  return (
    <form
    onSubmit={handleSubmit(onSubmit, onError)}
    className="h-auto w-full max-w-[430px] bg-[#FFFFFF]"
  >
    <h2 className="text-[28px] uppercase font-bold text-[#364D39]">Add room</h2>

    <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">Room number</p>
    <input
      {...register('roomNumber')}
      className={cn(
        'outline-none h-[44px] w-full max-w-[370px] rounded-[10px] p-[15px]',
        errors.roomNumber ? 'bg-[#ffbaba]' : 'bg-[#E1F5E4]',
      )}
    />
    {errors.roomNumber && <p className="text-[red] font-thin mt-[10px]">{errors.roomNumber?.message}</p>}
    
    <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">Room name</p>
    <input
      {...register('roomName')}
      className={cn(
        'outline-none h-[44px] w-full max-w-[370px] rounded-[10px] p-[15px]',
        errors.roomName ? 'bg-[#ffbaba]' : 'bg-[#E1F5E4]',
      )}
    />
    {errors.roomName && <p className="text-[red] font-thin mt-[10px]">{errors.roomName?.message}</p>}
    
    <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">Building number</p>
    <input
      {...register('buildingNumber')}
      className={cn(
        'outline-none h-[44px] w-full max-w-[370px] rounded-[10px] p-[15px]',
        errors.buildingNumber ? 'bg-[#ffbaba]' : 'bg-[#E1F5E4]',
      )}
    />
    {errors.buildingNumber && <p className="text-[red] font-thin mt-[10px]">{errors.buildingNumber?.message}</p>}
    
    <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">Building name</p>
    <input
      {...register('buildingName')}
      className={cn(
        'outline-none h-[44px] w-full max-w-[370px] rounded-[10px] p-[15px]',
        errors.buildingName ? 'bg-[#ffbaba]' : 'bg-[#E1F5E4]',
      )}
    />
    {errors.buildingName && <p className="text-[red] font-thin mt-[10px]">{errors.buildingName?.message}</p>}

    <button
      disabled={isSubmitting}
      className="w-full max-w-[370px] h-[44px] mt-[20px] text-white text-[16px] font-bold shadow-md rounded-[10px] bg-gradient-to-b from-[#6BF27F] to-[#28cd41]"
    >
      {isSubmitting ? 'Please wait...' : 'Generate QR Code'}
    </button>
  </form>
  )
}
