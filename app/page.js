"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [text, settext] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  }


  return (
    <main>
      <section className="min-h-[130vh] bg-[#254f1a] grid grid-cols-2">
        <div className="flex justify-center flex-col text-white ml-[6vw] mb-15 ">
          <p className="text-[#d2e823] text-7xl font-extrabold">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-xl font-medium mt-4 mb-8">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your Linktree handle"
              className="bg-white rounded-md text-black font-semibold p-4"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button 
            className="bg-[#e9c0e9] text-black rounded-full px-6 py-4 font-semibold hover:bg-[#e9c0e9bd] transition-colors duration-300"
            onClick={() => createTree()}
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center text-white mr-[6vw]">
          <img src="/thumbnail1.png" alt="Image 1" />
        </div>
      </section>

      

      <section className="min-h-[100vh] bg-[#e9c0e9] grid grid-cols-2">

        <div className="flex justify-center flex-col items-center text-white ml-[6vw]">
          <img src="/thumbnail2.png" alt="Image 2" />
        </div>
        
        <div className="flex justify-center flex-col items-center text-white mr-[6vw] ">
          <p className="text-[#502274] text-6xl font-extrabold">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-xl font-medium mt-4 mb-8 text-[#1e2330]">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <Link href="/generate"><button className="bg-[#502274] text-white rounded-full px-10 py-5 font-semibold text-xl hover:bg-[#3e1a4c] transition-colors duration-300">
              Get started for free
            </button></Link>
        </div>
      </section>

      

      <section className="grid grid-cols-2 min-h-[100vh] bg-[#780016]">

        <div className="flex justify-center flex-col items-center text-white ml-[6vw] ">
          <p className="text-[#e9c0e9] text-6xl font-extrabold">
            Share your Linktree from your Instagram, TikTok, Twitter and other bios
          </p>
          <p className="text-xl font-medium mt-4 mb-8">
            Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
          </p>
          <div className="flex gap-4">
            <Link href="/generate"><button className="bg-[#de9fde] text-black rounded-full px-10 py-5 font-semibold text-xl hover:bg-[#e9c0e990] transition-colors duration-300">
              Get started for free
            </button></Link>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center text-white mr-[6vw]">
          <img src="/thumbnail3.png" alt="Image 1" />
        </div>

      </section>
    </main>
  );
}
