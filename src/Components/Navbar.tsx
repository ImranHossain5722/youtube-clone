import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between item-center bg-[#212121] opacity-95 sticky top-0 z-50 px-14 h-14">
        <div className="flex gap-8 items-center text-2xl">
          <div>
            <GiHamburgerMenu />
          </div>
          <Link to="/">
            <div className="flex gap-1 items-center justify-center">
              <BsYoutube className="text-3xl text-red-600" />
              <span className="text-xl text-white"> YouTube</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <form action="">
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 ">
              <div className="flex gap-4 items-center pr-5">
                <div>
                  <AiOutlineSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  className="bg-zinc-900 focus:outline-none border-none w-96"
                />
                <AiOutlineClose className="text-xl cursor-pointer" />

                <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
                  <AiOutlineSearch className="text-xl" />{" "}
                </button>
              </div>
            </div>
          </form>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <TiMicrophone />
          </div>
          <div className="flex gap-5 items-center text-xl">
            <BsCameraVideo />
            <IoAppsSharp/>
          </div>
          <div className="relative">
            <BsBell/>
            <span className=" absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">9+</span>
          </div>
          <img src="https://i.ibb.co/Zx52PCk/Untitled-design.png" alt="user- image" className="w-9 h-9 rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;