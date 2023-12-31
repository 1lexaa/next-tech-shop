"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-6 rounded-lg border-t-4 border-indigo-600 bg-[#1d1d1d]">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form
          onSubmit={handleSumbit}
          className="flex flex-col gap-3 text-black"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-indigo-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
            Login
          </button>

          {error && (
            <div className="bg-red-500 text-black w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link
            className="text-sm mt-3 text-right text-gray-300"
            href={"/register"}
          >
            Don`t have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
