import { assets } from "@/Assets/assets";
import Button from "./Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/healthcheck">
          <Button className="hidden lg:flex">Connect to Rust?</Button>
        </Link>

        <Link href="/signup">
          <Button className="hidden lg:flex">Sign up</Button>
        </Link>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Your Blog</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          praesentium aperiam eveniet voluptatibus laboriosam nihil quam
          perferendis. Est nam a, ex explicabo obcaecati magni ad maxime harum,
          facilis debitis illo!
        </p>
      </div>
    </div>
  );
};

export default Header;
