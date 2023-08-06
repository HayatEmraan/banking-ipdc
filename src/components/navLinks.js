"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
const navLinksComponents = ({ navLinks }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {isOpen ? (
        <AiOutlineMenuFold className="cursor-pointer" size={30} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <AiOutlineMenuFold
          className="rotate-180 cursor-pointer"
          size={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div
        className={`${
          isOpen ? "flex flex-col" : "hidden"
        } absolute min-h-screen left-0 w-full bg-[#D8DCDD] p-2 z-10 space-y-4 mt-12`}
      >
        {navLinks.map((link) => (
          <Link className={`me-4 uppercase font-semibold`} href={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default navLinksComponents;
