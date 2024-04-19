"use client";
import Image from "next/image";
import Link from "next/link";

import { Button, Navbar } from "flowbite-react";

export const NavbarCustom = () => {
  return (
    <Navbar className="main-back fixed w-full z-20 top-0 start-0">
      <div className="flex flex-row space-between">
        <a href="#welcome-block" className="flex items-center me-8">
          <Image
            src={"/assets/png/logo.png"}
            alt="text"
            width={32}
            height={32}
          />
        </a>
        <div className="hidden md:flex flex-row gap-4 items-center">
          <a
            target="_blank"
            href={"https://www.instagram.com/luxurydesignsigns/"}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <Link href={""}>
            <svg
              className="w-7 h-7"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </Link>
          <a
            target="_blank"
            href={
              "https://www.facebook.com/profile.php?id=100077441899228&eav=AfbxXlc0MZU2rT3PEh6-duhq49or0ChPLa2moA0wKa-TXbUtWoECDKvNI7EPn3-4NMg&paipv=0&_rdr"
            }
          >
            <svg
              className="w-7 h-7"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex md:order-2">
        <a
          href="#calculator-block"
          type="button"
          className="text-white text-lg cursor-pointer font-semibold focus:ring-4 font-na focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110 nav-button-sell"
        >
          ESTIMATE NOW
        </a>
        <Navbar.Toggle className="text-white ms-4" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="#welcome-block"
          className="block py-2 px-3 text-white text-2xl md:p-0 hover:text-black font-na nav-items"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className="block py-2 px-3 text-white text-2xl md:p-0 hover:text-black font-na nav-items"
          href="#products-block"
        >
          Products
        </Navbar.Link>
        <Navbar.Link
          className="block py-2 px-3 text-white text-2xl md:p-0 hover:text-black font-na nav-items"
          href="#carousel-block"
        >
          Gallery
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="main-back fixed w-full z-20 top-0 start-0">
    //   <div className="flex flex-wrap items-center justify-between p-4 max-w-screen-2xl m-auto">
    //     <div className="flex flex-row space-between">
    //       <a href="#welcome-block" className="flex items-center me-8">
    //         <Image
    //           src={"/assets/png/logo.png"}
    //           alt="text"
    //           width={32}
    //           height={32}
    //         />
    //       </a>
    //       <div className="hidden md:flex flex-row gap-4 items-center">
    //         <a
    //           target="_blank"
    //           href={"https://www.instagram.com/luxurydesignsigns/"}
    //         >
    //           <svg
    //             className="w-8 h-8"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="white"
    //             viewBox="0 0 448 512"
    //           >
    //             <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    //           </svg>
    //         </a>
    //         <Link href={""}>
    //           <svg
    //             className="w-7 h-7"
    //             fill="white"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 448 512"
    //           >
    //             <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
    //           </svg>
    //         </Link>
    //         <a
    //           target="_blank"
    //           href={
    //             "https://www.facebook.com/profile.php?id=100077441899228&eav=AfbxXlc0MZU2rT3PEh6-duhq49or0ChPLa2moA0wKa-TXbUtWoECDKvNI7EPn3-4NMg&paipv=0&_rdr"
    //           }
    //         >
    //           <svg
    //             className="w-7 h-7"
    //             fill="white"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //           >
    //             <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center">
    //       <a
    //         href="#calculator-block"
    //         type="button"
    //         className="text-white text-lg cursor-pointer font-semibold focus:ring-4 font-na focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110 nav-button-sell"
    //       >
    //         ESTIMATE NOW
    //       </a>
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover: focus:outline-none focus:ring-2 focus:ring-white dark:text-white"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-sticky"
    //     >
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black">
    //         <li>
    //           <a
    //             href="#welcome-block"
    //             className="block py-2 px-3 text-white text-2xl rounded md:p-0 hover:text-black font-na nav-items"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#products-block"
    //             className="block py-2 px-3 text-white text-2xl rounded md:p-0 hover:text-black font-na nav-items"
    //             aria-current="page"
    //           >
    //             Products
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#carousel-block"
    //             className="block py-2 px-3 text-white text-2xl rounded md:p-0 hover:text-black font-na nav-items"
    //             aria-current="page"
    //           >
    //             Gallery
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
