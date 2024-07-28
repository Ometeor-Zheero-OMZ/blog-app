"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Button from "@/Components/Button";

interface ApiResponse {
  status: string;
  message: string;
}

const Page = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<ApiResponse>(
        "http://localhost:8080/healthchecker"
      );
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("例外エラー発生！");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-[2rem] px-20 py-5">
        <Link href="/">
          <Button className="hidden lg:flex">Back</Button>
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-5">
            Rustと繋がっているか、ボタンを押して確かめてみよう
          </h1>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            ここを押して
          </button>
          {loading && <p className="mt-3">きてます。きてます。</p>}
          {error && <p className="mt-3 text-red-500">エラー: {error}</p>}
          {data && (
            <pre className="mt-3 bg-gray-700 p-3 rounded-md">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
