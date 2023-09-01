"use client";


import { VscAccount } from "react-icons/vsc";

import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center ">
      <div className="shadow-lg p-12  flex flex-col gap-2 text-center  bg-[#1d1d1d] rounded-lg  my-10">
        <VscAccount className="items-center ml-11 mb-5" size={80} />
        <div className="">
          <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="">
          <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-indigo-600 font-bold text-white px-5 py-2.5  mt-3 rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
