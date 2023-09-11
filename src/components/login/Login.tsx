import { useState, Fragment, ChangeEvent } from "react";
import UnivtrazeLogo from "@assets/logo.svg";
import EyeIcon from "@assets/eye.svg";
import EyeSlashIcon from "@assets/eye-slash.svg";
import { Link } from "react-router-dom";
import { cn } from "@/lib/formatter";
import { useForm, FieldErrors } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./schema/LoginValidationSchema";

interface FormValues {
  email: string
  password: string
  type: string
}

enum UserTypes {
  ADMIN = 'admin',
  CLINIC = 'clinic'
} 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      type: "admin"
    },
    resolver: yupResolver(loginValidationSchema)
  });

  const { handleSubmit, register, setValue, watch, formState: { errors }} = form

  const hasEmailError = !!errors.email
  const hasPasswordError = !!errors.password

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const onError = (errors: FieldErrors) => {
    console.log(errors)
  }

  const handleOnChangeUserType = ((e: ChangeEvent<HTMLFieldSetElement> & { target: { value: string }}) => {
    setValue('type', e.target.value)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="h-auto w-[430px] bg-[#FFFFFF] p-[30px] rounded-[20px] shadow-md">
      <div className="flex gap-[15px] items-center justify-center">
        <img src={UnivtrazeLogo} height={33} width={33} alt="logo" />
        <h1 className="text-[#364D39] text-[22px] font-bold">UnivTraze</h1>
      </div>
      <h2 className="mt-[50px] text-[28px] uppercase font-bold text-[#364D39]">
        Log in
      </h2>

      <fieldset onChange={handleOnChangeUserType} className="w-full gap-[15px] uppercase font-sembold flex items-center justify-center">
        {Object.values(UserTypes).map(userType => {
          const isChecked = userType === watch('type')
          return (
            <Fragment key={userType}>
              <input hidden defaultChecked={isChecked} type="radio" id={userType} value={userType} name="user" />
              <label className={cn("flex cursor-pointer  border shadow-md rounded items-center justify-center h-[44px] py-[15px] px-[15px] w-full", isChecked ? 'bg-gradient-to-b from-[#6BF27F] to-[#28cd41] text-[#FFFFFF]' : 'bg-gray-100')} htmlFor={userType}>{userType}</label>
            </Fragment>
          )
        })}
      </fieldset>
      
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
      <button className="w-[370px] h-[44px] mt-[10px] text-white text-[16px] font-bold shadow-md rounded-[10px] bg-gradient-to-b from-[#6BF27F] to-[#28cd41]">
        LOG IN
      </button>
      <div className=" mt-[40px]">
        <Link to="/forgot-password">
          <p className="text-center underline">Forgot password?</p>
        </Link>
      </div>
    </form>
  );
}
