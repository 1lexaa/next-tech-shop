"use client";

import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-12  flex flex-col gap-2 my-6 bg-purple-200 rounded-lg">
        <div className="">
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 font-bold text-white px-6 py-2 mt-3 rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}