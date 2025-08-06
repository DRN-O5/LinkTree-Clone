"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);

  return (
    <>
      {showNavbar && (
        <nav className="bg-white  px-3 py-2 rounded-full w-7xl mx-auto fixed right-[10vw] top-10 flex justify-between">
          <div className="logo flex gap-14 items-center ml-8">
            <Link href="/">
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                alt=""
                className="nav-desktop-logo h-6"
              ></img>
            </Link>

            <ul className="flex gap-10 text-bold font-medium">
              <Link href="/products">
                <li>Products</li>
              </Link>
              <Link href="/templates">
                <li>Templates</li>
              </Link>
              <Link href="/marketplace">
                <li>Marketplace</li>
              </Link>
              <Link href="/learn">
                <li>Learn</li>
              </Link>
              <Link href="/pricing">
                <li>Pricing</li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-4 right-2">
            <button className="login bg-[#eff0ec] px-5 py-5 rounded-xl font-semibold">
              Log in
            </button>
            <button className="signup bg-[#1e2330] text-white px-5 py-5 rounded-full font-semibold">
              Sign up free
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
