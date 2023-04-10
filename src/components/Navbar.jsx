import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import logo from "../assets/logo.svg";
import { CSSTransition } from "react-transition-group";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  //needs to add log out function
  const logOut = () => {
    window.location.href = "/login";
  };

  return (
    <div className="text-white fixed z-[100] flex h-[70px] w-full justify-between bg-white-normal drop-shadow-nav sm:px-24">
      <div className="flex flex-shrink-0 items-center py-4 mobile:mx-0 mobile:px-10">
        <div className="h-full w-full pb-[3.05rem]">
          <Link to="" className="flex items-center justify-center gap-2">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              src={logo}
              alt="Logo"
              className="h-12 hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <ul className="flex h-full items-center justify-center gap-1 text-xl text-black sm:hidden lg:ml-auto xl:flex mobile:hidden">
        <NavLink
          end
          to=""
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          {" "}
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="cursor-pointer px-4 py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold"
          >
            <span className="hoverUnderlineAnimation pb-1">Dashboard</span>
          </li>
        </NavLink>
        <NavLink
          end
          to="/asset"
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          {" "}
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="cursor-pointer px-4 py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold"
          >
            <span className="hoverUnderlineAnimation pb-1">Detail Asset</span>
          </li>
        </NavLink>
        <NavLink
          exact
          to="/input"
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="transform cursor-pointer px-4 py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold"
          >
            <span className="hoverUnderlineAnimation pb-1">Input</span>
          </li>
        </NavLink>
      </ul>
      <div className=" my-auto items-center sm:block xl:hidden mobile:block">
        <div className="mb-0 px-10 outline-none">
          <Hamburger toggled={navbar} toggle={setNavbar} />
        </div>
      </div>
      <CSSTransition
        in={navbar}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
        onEnter={() => setNavbar(true)}
        onExited={() => setNavbar(false)}
      >
        <ul className="z-50 mx-0 mt-16 flex h-screen w-full flex-col bg-white-normal font-medium sm:fixed sm:items-center sm:justify-evenly sm:text-3xl xl:hidden mobile:fixed mobile:items-center mobile:gap-10 mobile:text-3xl">
          <li className="active">
            <Link
              to=""
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              className="text-white block px-2 py-4 text-lg"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              to="/asset"
              className="text-white block px-2 py-4 text-lg"
            >
              Detail Asset
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              to="/input"
              className="text-white block px-2 py-4 text-lg"
            >
              Input
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </CSSTransition>
    </div>
  );
};

export default Navbar;
