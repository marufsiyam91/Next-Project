"use client";
import React, { useState } from "react";
import Link from "next/Link";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav>
      <div className="flex w-full justify-between items-center h-[5rem] px-8 bg-slate-50 text-slate-800 shadow-xl">
        <div>
          <h2 className="text-2xl">Logo</h2>
        </div>
        <div>
          <ul className="md:flex gap-2 hidden">
            <Link
              className="text-xl py-2 px-4 hover:bg-slate-400 rounded-lg duration-300 hover:text-slate-50"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-xl py-2 px-4 hover:bg-slate-400 rounded-lg duration-300 hover:text-slate-50"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="text-xl py-2 px-4 hover:bg-slate-400 rounded-lg duration-300 hover:text-slate-50"
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="text-xl py-2 px-4 hover:bg-slate-400 rounded-lg duration-300 hover:text-slate-50"
              href={"/blog"}
            >
              Blog
            </Link>
          </ul>
          <div className="md:hidden ">
            <button
              className="text-2xl"
              onClick={() => setIsClicked(!isClicked)}
            >
              {isClicked ? <AiOutlineClose /> : <MdOutlineMenu />}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="md:hidden absolute end-0 sm:w-[320px] h-[calc(100vh-80px)] bg-slate-500 w-full duration-500 flex flex-col justify-evenly">
          <div className="px-4">
            <h1 className="text-4xl">Logo</h1>
          </div>
          <ul className=" flex flex-col ">
            <Link
              className="text-xl py-2 px-4 border-b hover:text-slate-50 duration-500"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-xl py-2 px-4 border-b hover:text-slate-50 duration-500"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="text-xl py-2 px-4 border-b hover:text-slate-50 duration-500"
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="text-xl py-2 px-4 border-b hover:text-slate-50 duration-500"
              href={"/blog"}
            >
              Blog
            </Link>
          </ul>
          <div className="px-4">
            <h2>Contact info</h2>
            <p>Dhaka, keranigonj, Abdullahpur</p>
            <p>+00 01826096711</p>
            <p>marfusiyam9123@gmail.com</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
