import React from "react";
import Link from "next/link";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import Profile from "./UserInfo";

const Nav = () => {
  return (
    <nav className="p-1 mb-10 flex justify-between  text-white shadow-lg bg-[#1d1d1d] rounded-2xl   ">
      <Link href="/" replace>
        <div className="ml-5 p-2 text-xl font-mono animate-pulse font-bold">
          Shop
        </div>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/iphones" replace>
            <div className="px-4 py-2 border-none rounded-md ml-8 font-bold">
              IPHONE
            </div>
          </Link>
        </li>
        <li>
          <Link href="/watch">
            <div className="px-4 py-2 border-none rounded-md ml-8 font-bold">
              WATCH
            </div>
          </Link>
        </li>
        <li>
          <Link href="/macbook">
            <div className="px-4 py-2 border-none rounded-md ml-8 font-bold">
              MACBOOK
            </div>
          </Link>
        </li>
        <li>
          <Link href="/ipad">
            <div className="px-4 py-2 border-none rounded-md ml-8 font-bold">
              IPAD
            </div>
          </Link>
        </li>
        <li>
          <Link href="/airpods">
            <div className="px-4 py-2 border-none rounded-md ml-8 font-bold">
              AIRPODS
            </div>
          </Link>
        </li>
      </ul>

      <ul className="flex items-center">
        <li>
          <div className="px-2 py-2 border-none rounded-md ml-4">
            <CgShoppingCart size="22" />
          </div>
        </li>

        <li>
          <div className="px-2 py-2 border-none rounded-md ml-4 mr-4">
            <Link href="/profile">
              <CgProfile size="22" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
