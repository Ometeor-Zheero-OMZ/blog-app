"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { assets } from "@/Assets/assets";
// import Image from "next/image";
import Button from "@/Components/Button";

const page: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`name: ${name}, email: ${email}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-[2rem] px-20 py-5">
        <Link href="/">
          <Button className="hidden lg:flex">Back</Button>
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-5 text-gray-800 dark:text-gray-200">
            SIGN UP
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-black mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-black mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:bg-violet-600 dark:hover:bg-violet-700"
            >
              新規登録
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
