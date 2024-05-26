"use client";
import Image from "next/image";
import { Wrapper } from "../../common/wrapper";
import { useState } from "react";
import { Models } from "./models";

const textClass =
  "text-2xl font-na text-white uppercase cursor-pointer px-6 py-2 w-fit self-center ";

export const ModelsBlock = () => {
  const [selectedID, setSelectedID] = useState("1");

  const onSelectID = (id: string) => {
    setSelectedID(id);
  };

  return (
    <Wrapper>
      <section
        id={""}
        className="dark-back w-full min-h-screen flex flex-col md:pb-24 md:pt-20 pt-8 pb-8 md:gap-18 gap-8 relative justify-between"
      >
        <div className="line-div"></div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 w-full">
          <p
            id={"1"}
            onClick={() => {
              onSelectID("1");
            }}
            className={textClass + (selectedID === "1" ? " bg-[#C27E35]" : "")}
          >
            Front Lit
          </p>
          <p
            id={"2"}
            onClick={() => {
              onSelectID("2");
            }}
            className={textClass + (selectedID === "2" ? " bg-[#C27E35]" : "")}
          >
            Back Lit
          </p>
          <p
            id={"3"}
            onClick={() => {
              onSelectID("3");
            }}
            className={textClass + (selectedID === "3" ? " bg-[#C27E35]" : "")}
          >
            Front & Back
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full h-auto items-center px-4 md:px-16">
          <Models />
        </div>
        <div className="w-full flex flex-row content-center justify-center text-center">
          <a
            href="#calculator-block"
            type="button"
            className="estimate-button w-fit gentle-shake font-na font-semibold text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white  px-8 py-4 text-center transform transition duration-500 hover:scale-110"
          >
            GET ESTIMATE
          </a>
        </div>
      </section>
    </Wrapper>
  );
};
