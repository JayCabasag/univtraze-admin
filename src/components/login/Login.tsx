import { useState } from "react";
import UnivtrazeLogo from "@assets/logo.svg";
import EyeIcon from "@assets/eye.svg";
import EyeSlashIcon from "@assets/eye-slash.svg";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/formatter";
import { useForm, FieldErrors } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schemas/schema";
import { UserType } from "./constants/constants";
import { signIn } from "@/zustand/api/adminAPI";
import { useToast } from "../shared/toast/use-toast";

interface FormValues {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema)
  });

  const { handleSubmit, register, formState: { errors, isSubmitting }} = form

  const hasEmailError = !!errors.email
  const hasPasswordError = !!errors.password

  const onSubmit = async (data: FormValues) => {
    const payload = { ...data, type: UserType.ADMIN}
    await signIn(payload)
    .then((response) => {
      console.log(response)
      toast({
        variant: "succes",
        title: "Login success",
        description: "Successfully login as an admin",
      })
      navigate('/dashboard')
    })
    .catch((error) => {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Double check credentials",
      })
    })
  }

  const onError = (errors: FieldErrors) => {
    console.log(errors)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="h-auto w-[430px] bg-[#FFFFFF] p-[30px] rounded-[20px] shadow-md">
      <div className="flex gap-[15px] items-center justify-center">
        <img src={UnivtrazeLogo} height={33} width={33} alt="logo" />
        <h1 className="text-[#364D39] text-[22px] font-bold">UnivTraze</h1>
      </div>
      <h2 className="mt-[50px] text-[28px] uppercase font-bold text-[#364D39]">
        Log in
      </h2>
      
      <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">
        Email
      </p>
      <input
        {...register('email')}
        className={cn(
          "outline-none h-[44px] w-[370px] rounded-[10px] p-[15px]",
          hasEmailError ? "bg-[#ffbaba]" : "bg-[#E1F5E4]"
        )}
      />
      {hasEmailError && (
        <p className="text-[red] font-thin mt-[10px]">{errors.email?.message}</p>
      )}
      <p className="text-[16px] font-normal mb-[6px] mt-[10px] text-[#364D39]">
        Password
      </p>
      <div
        className={cn(
          "rounded-[10px] flex items-center justify-center pr-[15px] w-[370px]",
          hasPasswordError ? "bg-[#ffbaba]" : "bg-[#E1F5E4]"
        )}
      >
        <input
          {...register('password')}
          type={showPassword ? "text" : "password"}
          className="bg-[transparent] flex-1 outline-none h-[44px] rounded-[10px] p-[15px]"
        />
        <span
          role="button"
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer rounded-full"
        >
          <img
            src={showPassword ? EyeIcon : EyeSlashIcon}
            height={24}
            width={24}
            alt="logo"
          />
        </span>
      </div>
      {hasPasswordError && (
        <p className="text-[red] font-thin mt-[10px]">
          {errors.password?.message}
        </p>
      )}
      <button disabled={isSubmitting} className="w-[370px] h-[44px] mt-[20px] text-white text-[16px] font-bold shadow-md rounded-[10px] bg-gradient-to-b from-[#6BF27F] to-[#28cd41]">
        {isSubmitting ? 'Please wait...' : 'LOG IN'}
      </button>
      <div className=" mt-[40px]">
        <Link to="/forgot-password">
          <p className="text-center underline">Forgot password?</p>
        </Link>
      </div>
    </form>
  );
}
