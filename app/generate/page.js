"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Generate = () => {

  const searchParams = useSearchParams();
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const submitLinks = async (text, link, handle) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "pic": pic,
      "handle": handle,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setlinks([{ link: "", linktext: "" }]);
      sethandle("");
      setpic("");
    }
    else {
      toast.error(result.message);
    }
  };

  const addLink = (linktext, link, handle) => {
    setlinks(links.concat([{ link: "", linktext: "" }]));
  };

  return (
    <div className="bg-blue-950 min-h-screen grid grid-cols-2">
      <div className="col1 justify-center items-center flex">
        <div className="flex flex-col p-9 bg-blue-400 text-black rounded-2xl px-[6vw] mt-20">
          <h1 className="font-medium text-2xl mb-3 flex justify-center">
            Create your Linktree
          </h1>

          <div className="flex flex-col items-center">
            <h2 className="font-medium">Claim your Handle</h2>
            <input
              type="text"
              placeholder="Choose Handle"
              className="bg-white rounded-md text-black font-semibold px-4 py-2 mb-2 focus:outline-blue-700"
              value={handle || ""}
              onChange={(e) => {
                sethandle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h2 className="font-medium">Add Links</h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div className="flex flex-row items-center mt-2" key={index}>
                    <input
                      type="text"
                      placeholder="Your link text"
                      className="bg-white rounded-md text-black font-semibold px-4 py-2 mb-2 mx-2 focus:outline-blue-700"
                      value={item.link || ""}
                      onChange={(e) => {
                        handleChange(index, e.target.value, item.linktext);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter link"
                      className="bg-white rounded-md text-black font-semibold px-4 py-2 mb-2 focus:outline-blue-700"
                      value={item.linktext || ""}
                      onChange={(e) => {
                        handleChange(index, item.link, e.target.value);
                      }}
                    />
                  </div>
                );
              })}
            <button
              className="bg-[#d2e823] text-black rounded-full px-4 py-2 font-semibold mt-3 hover:bg-[#c2d622] transition-colors duration-300"
              onClick={() => addLink()}
            >
              + Add Link
            </button>
          </div>

          <div className="flex flex-col items-center mt-4">
            <h2 className="font-medium">Enter Profile Picture</h2>
            <input
              type="file"
              accept="image/*"
              className="bg-white rounded-md text-black font-semibold px-4 py-2 mb-2 focus:outline-blue-700"
              value={pic || ""}
              onChange={(e) => {
                setpic(e.target.files[0]);
              }}
            />
          </div>
          <button
            className="bg-[#d2e823] disabled:opacity-50 disabled:hover:bg-[#d2e823] text-black rounded-full py-2 font-semibold mt-3 hover:bg-[#c2d622] transition-colors duration-300"
            onClick={() => {
              submitLinks();
            }}
            disabled={!handle || !links[0].link || !links[0].linktext}
          >
            Claim your Linktree
          </button>
        </div>
      </div>
      <div className="col2 w-full h-screen">
        <img
          src="https://assets.production.linktr.ee/auth/3423/media/banner-login-desktop.f355be949b508c58ec2d.webp"
          alt="Promotional Banner"
          className="h-full w-full object-cover"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Generate;
