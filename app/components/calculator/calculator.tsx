"use client";

import { use, useState } from "react";
import { Step1, TYPE1, TYPE2 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { SubmitButton } from "./submit-button";

export const Calculator = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [isLit, setIsLit] = useState(false);
  const [isLogo, setIsLogo] = useState(false);
  const [name, setName] = useState("");

  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(10);

  const getTotal = () => {
    if (selectedType === TYPE1) {
      const finalName = name.replace(/ /g, "");
      return finalName.length * 250 + 2000 + (isLogo ? 450 : 0) + " CAD";
    }

    if (selectedType === TYPE2) {
      if (width !== undefined) return width * 101 + " CAD";
    }

    return "We need more details from you. Please submit the form or contact us to get your estimate";
  };

  return (
    <div className="w-100 flex flex-col md:flex-row">
      <div className="md:w-1/2 pt-8 pb-8 md:p-24">
        <h2 className="text-5xl text-white mb-12 uppercase font-semibold">
          Get your estimate in one minute
        </h2>
        <p className="text-2xl font-na text-white font-light mb-8">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. In publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visua
        </p>
        <div className="flex flex-row md:flex-col">
          <a
            href="tel:+12263789562"
            className="text-white mb-2 md:text-center font-na text-2xl"
          >
            +1(226)378-9562 - Vlad
          </a>
          <a
            href="tel:+12263789562"
            className="text-white md:text-center font-na text-2xl"
          >
            +1(226)378-9562 - Rami
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full p-4">
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
          <Step3
            clientName={clientName}
            email={email}
            phone={phone}
            setClientName={setClientName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
          <SubmitButton
            estimate={getTotal()}
            email={email}
            isLit={isLit}
            isLogo={isLogo}
            msg={msg}
            name={clientName}
            phone={phone}
            signName={name}
            type={selectedType}
            width={width}
          />
        </div>
      </div>
    </div>
  );
};
