import React, { useState, useEffect } from "react";
// import authSvg from '../assets/login.svg';
import { ToastContainer, toast } from "react-toastify";
import { Link, Redirect, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const RegisterCard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (isAuth() && isAuth().role === "admin") {
  //       navigate("/admin");
  //     } else if
  //      (isAuth()) {
  //       navigate("/beranda");
  //     }
  //   });

  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    textChange: "Sign In",
  });
  const { email, password1, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    // if (!email) {
    //   toast.error("ANDA SALAH");
    // } else if (!password1) {
    //   toast.error("SALAH JUGA");
    // } else {
    //   navigate("/admin/operator/test");
    // }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] rounded-3xl bg-white-dark p-6 outline-2 md:px-16 "
    >
      <div className="flex h-full w-full content-center justify-center  text-3xl font-bold">
        User Register
      </div>

      <div className=" my-2 flex items-center justify-center text-base">
        <FontAwesomeIcon
          icon={faUser}
          color="Black"
          size="2xl"
          className="z-10 rounded-full bg-slate-600 p-3"
        />

        <input
          className=" text-gray-500 placeholder:text-gray-400 my-4 w-full -translate-x-2 rounded-r-xl bg-white-normal p-3 text-base focus:outline-none "
          placeholder="Enter your name"
          onChange={handleChange("email")}
          value={email}
        />
      </div>
      <div className=" my-2 flex items-center justify-center text-base">
        <FontAwesomeIcon
          icon={faUser}
          color="Black"
          size="2xl"
          className="z-10 rounded-full bg-slate-600 p-3"
        />

        <input
          className=" text-gray-500 placeholder:text-gray-400 my-4 w-full -translate-x-2 rounded-r-xl bg-white-normal p-3 text-base focus:outline-none "
          placeholder="Username"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className=" my-2 flex items-center justify-center  text-base">
        <FontAwesomeIcon
          icon={faLock}
          color="Black"
          size="2xl"
          className="z-10 rounded-full bg-slate-600 p-3"
        />
        <input
          type={"password"}
          className=" text-gray-500 placeholder:text-gray-400 my-4 w-full -translate-x-2 rounded-r-xl bg-white-normal p-3 text-base focus:outline-none "
          placeholder="Password"
          onChange={handleChange("password1")}
          value={password1}
        />
      </div>
      <div className=" my-2 flex items-center justify-center  text-base">
        <FontAwesomeIcon
          icon={faLock}
          color="Black"
          size="2xl"
          className="z-10 rounded-full bg-slate-600 p-3"
        />
        <input
          type={"password"}
          className=" text-gray-500 placeholder:text-gray-400 my-4 w-full -translate-x-2 rounded-r-xl bg-white-normal p-3 text-base focus:outline-none "
          placeholder="Confirm password"
          onChange={handleChange("password1")}
          value={password1}
        />
      </div>

      <div className=" w-full text-center">
        <button
          type="submit"
          className=" my-4   w-full scale-100 transform rounded-lg bg-slate-400  px-10 py-2 text-center transition duration-300 hover:opacity-75 "
        >
          <h1 className=" rounded-2xl bg-slate-400 text-xl font-bold ">
            Register
          </h1>
        </button>
        <div className="font-futuramd text-gray-400 text-center text-base ">
          <p className="inline"> Already have an account ? </p>
          <Link
            className=" inline font-bold transition duration-300"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterCard;
