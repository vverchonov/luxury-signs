"use client";

import { use, useState } from "react";
import { Step1, TYPE1, TYPE2 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";

export const Calculator = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [isLit, setIsLit] = useState(false);
  const [isLogo, setIsLogo] = useState(false);
  const [name, setName] = useState("");

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const getTotal = () => {
    if (selectedType === TYPE1) {
      const finalName = name.replace(/ /g, "");
      return finalName.length * 250 + 2000 + (isLogo ? 450 : 0) + " CAD";
    }

    if (selectedType === TYPE2) {
      return width * 101 + " CAD";
    }

    return "We need more details from you. Please submit the form or contact us to get your estimate";
  };

  return (
    <div className="w-100 flex flex-wrap">
      <div className="lg:w-1/2 w-full">
        <div className="mb-4">
          <Step1 selectedType={selectedType} onSelect={setSelectedType} />
        </div>
        <div className="mb-4">
          <Step2
            height={height}
            width={width}
            setHeight={setHeight}
            setWidth={setWidth}
            selectedType={selectedType}
            isLogo
            isLit
            setIsLit={(e) => setIsLit(e)}
            setIsLogo={(e) => setIsLogo(e)}
            name={name}
            setName={setName}
          />
        </div>
        <div>
          <Step3 />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <p className="text-white text-7xl text-bold">YOUR TOTAL:</p>
          <p className="text-white text-5xl text-bold">{getTotal()}</p>
        </div>
      </div>
    </div>
  );
};
