import { Metrophobic } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinksComponents from "./navLinks";
const navLinks = [
  {
    name: "Retails",
  },
  {
    name: "Sme",
  },
  {
    name: "Corporate",
  },
  {
    name: "About Us",
  },
  {
    name: "Covid 19",
  },
  {
    name: "Campaigns",
  },
];

const Metropolis = Metrophobic({ subsets: ["latin"], weight: "400" });
const HeaderComponent = () => {
  return (
    <div className="relative top-0 left-0 w-full">
      {/* large device header */}
      <div
        className={`${Metropolis.className} lg:flex justify-between items-center container mx-auto p-2 sticky z-10 hidden`}
      >
        <Image
          src="/ipdc.svg"
          alt="IPDC Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div>
          {navLinks.map((link) => (
            <Link className="me-4 uppercase font-semibold" href={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/magnifier.svg"
            alt="Search"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          <button className="bg-primary text-white px-3 py-1 rounded-md">
            ISERVICE
          </button>
        </div>
      </div>
      {/* medium device header */}
      <div
        className={`${Metropolis.className} lg:hidden justify-between items-center container mx-auto p-2 sticky z-10 flex`}
      >
        <Image
          src="/ipdc.svg"
          alt="IPDC Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/magnifier.svg"
              alt="Search"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <button className="bg-primary text-white px-3 py-1 rounded-md">
              ISERVICE
            </button>
          </div>
          <NavLinksComponents navLinks={navLinks} />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between container mx-auto">
        <div className="flex flex-col gap-4 lg:mt-[17%] p-4">
          <h1 className="text-6xl font-extrabold">
            Chase Your <br /> Dream with us
          </h1>
          <p>
            The harder you work for something, the greater <br /> you’ll feel
            when you achieve it.
          </p>
          <div className="space-x-4 text-sm font-semibold">
            <button className="bg-primary text-white px-3 py-2 rounded-md">
              APPLY ONLINE
            </button>
            <button className="text-primary outline outline-1 outline-primary px-3 py-2 rounded-md">
              LOAN CALCULATOR
            </button>
          </div>
          <div className="mt-8">
            <Image
              src="/contact.png"
              alt="Contact"
              className="dark:invert"
              width={220}
              height={120}
              priority
            />
          </div>
        </div>
        <div className="xl:absolute bg-[#FFEAF5] w-full xl:w-[770px] 2xl:w-[920px] xl:h-[620px] right-0 top-0">
          <Image
            style={{ width: "100%", height: "100%", marginTop: "75px", objectFit: "cover" }}
            src="/banner.svg"
            alt="IPDC Logo"
            priority
            width={770}
            height={620}
            objectFit="fit-cover"
          />
          <div className="flex gap-4 shadow p-3 rounded-full py-4 items-center w-fit absolute top-1/4  xl:-left-14 bg-white">
            <Image src="/car.svg" alt="car" priority width={34} height={28} />
            <h1 className="text-xl font-medium">Car Loans</h1>
          </div>
          <div className="flex gap-4 shadow p-3 rounded-full py-4 items-center w-fit absolute top-1/3 right-1 md:right-24 xl:right-14 bg-white">
            <Image src="/house.svg" alt="car" priority width={34} height={28} />
            <h1 className="text-xl font-medium">House Loans</h1>
          </div>
          <div className="flex gap-4 p-3 rounded-full py-4 items-center w-fit absolute xl:top-1/2 top-1/3 mt-8 xl:mt-0 right-1 md:right-24 xl:right-14">
            <Image src="/dot.png" alt="car" priority width={94} height={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
