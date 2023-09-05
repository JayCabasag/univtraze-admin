import { useState } from "react";
import UnivtrazeLogo from "@assets/logo.svg";
import EyeIcon from "@assets/eye.svg";
import EyeSlashIcon from "@assets/eye-slash.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { cn } from "@/lib/formatter";
import LoginValidationSchema from "./schema/LoginValidationSchema";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const hasEmailError = !!formik.errors.email && formik.touched.email;
  const hasPasswordError = !!formik.errors.password && formik.touched.password;

  return (
    <div className="h-auto w-[430px] bg-[#FFFFFF] p-[30px] rounded-[20px] shadow-md">
      <div className="flex gap-[15px] items-center justify-center">
        <img src={UnivtrazeLogo} height={33} width={33} alt="logo" />
        <h1 className="text-[#364D39] text-[22px] font-bold">UnivTraze</h1>
      </div>
      <h2 className="mt-[90px] text-[28px] uppercase font-bold text-[#364D39]">
        Log in
      </h2>

      <p className="text-[16px] font-normal mb-[6px] mt-[30px] text-[#364D39]">
        Email
      </p>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={cn(
          "outline-none h-[44px] w-[370px] rounded-[10px] p-[15px]",
          hasEmailError ? "bg-[#ffbaba]" : "bg-[#E1F5E4]"
        )}
      />
      {hasEmailError && (
        <p className="text-[red] font-thin mt-[10px]">{formik.errors.email}</p>
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
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          {formik.errors.password}
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
    </div>
  );
}
