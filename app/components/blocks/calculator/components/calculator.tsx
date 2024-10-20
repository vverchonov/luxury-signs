"use client";

import { use, useState } from "react";
import emailjs from "@emailjs/nodejs";
import { Step1, TYPE1, TYPE2 } from "../steps/step1";
import { Step2 } from "../steps/step2";
import { Step3 } from "../steps/step3";
import { SubmitButton } from "./submit-button";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";
import { Modal } from "@/app/components/common/modal";

const convertFileToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      //@ts-ignore
      resolve(reader.result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const Calculator = () => {
  const [file, setFile] = useState();

  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [isLit, setIsLit] = useState(false);
  const [isLogo, setIsLogo] = useState(false);
  const [name, setName] = useState("");

  const onCloseModal = () => {
    setShowModal(false);
  };

  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(10);

  const onSuccessSubmit = () => {
    setShowModal(true);
    console.log("here 2");
    clearForn();
  };

  const clearForn = () => {
    setFile(null as any);
    setClientName("");
    setSelectedType(null);
    setIsLit(false);
    setIsLogo(false);
    setName("");
    setPhone("");
    setEmail("");
    setMsg("");
    setWidth(0);
    setHeight(0);
  };

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

  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  const sendRequest = async (img: any) => {
    var data = new FormData();
    data.append("file", img);
    //@ts-ignore
    data.append("file_name", file ? file?.name : "");
    data.append("name", clientName);
    data.append("email", email);
    data.append("phone", phone);
    data.append("msg", msg);
    onSuccessSubmit();

    console.log("qweqwe");
    sendGTMEvent({
      event: "FormSubmitted",
      value: "",
    });

    const response = await fetch("/api/calculator", {
      method: "post",
      body: data,
    });

    if (!response.ok) {
      alert("Error happened: " + response.status);
      clearForn();
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (file) {
      const base64String = await convertFileToBase64(file);
      sendRequest(base64String);
    } else {
      sendRequest("");
    }
  };

  return (
    <div className="w-100 flex flex-col md:flex-row">
      <GoogleTagManager gtmId="GTM-MC6JHWMZ" />
      <div className="md:w-1/2 pt-8 pb-8 md:p-12 lg:p-30 flex flex-col">
        <h2 className="text-5xl text-white mb-12 uppercase font-semibold">
          Get your estimate
        </h2>
        <p className="text-2xl font-na text-white font-light mb-8">
          "Discover the perfect sign for your needs with our intuitive price
          calculator. Simply input your specifications and get an instant
          estimate. Let's bring your vision to life, hassle-free."
        </p>
        <div className="flex flex-col gap-4 my-auto mb-4">
          <a href="tel:+15192828335" className="text-white  font-na text-2xl">
            +1(519)282-8335 Rami
          </a>
          <a href="tel:+12263789562" className="text-white  font-na text-2xl">
            +1(226)378-9562 Vlad
          </a>
        </div>
        {/* <p className="text-white text-small font-na mt-auto">
          The price is an estimate and can vary depends on the uniqueness of the
          job.
        </p> */}
      </div>
      <form
        onSubmit={sendEmail}
        className="md:w-1/2 w-full p-4 flex flex-col justify-center"
      >
        {/* <div className="mb-4">
          <Step1 selectedType={selectedType} onSelect={setSelectedType} />
        </div> */}
        <div>
          <Step3
            clientName={clientName}
            email={email}
            phone={phone}
            setClientName={setClientName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
          <Step2
            msg={msg}
            setMsg={setMsg}
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

          <div className="w-full flex flex-row items-center">
            <SubmitButton
              onSuccess={onSuccessSubmit}
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
            <div className="flex flex-col gap-2 ms-auto justify-end align-middle items-center">
              <label
                htmlFor="file-upload"
                className="custom-file-upload ms-auto"
              >
                Upload Image
              </label>
              <input
                id="file-upload"
                accept="image/gif, image/jpeg, image/png"
                onChange={handleChange}
                type="file"
              />
              {file && (
                <div className="flex flex-row gap-2">
                  {/* @ts-ignore */}
                  <p className="text-white text-end">{file && file?.name}</p>
                  <p
                    onClick={() => {
                      setFile(undefined);
                    }}
                    className="text-white cursor-pointer border px-2 rounded-lg flex align-middle justify-center items-center"
                  >
                    X
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
      <Modal isOpen={showModal} onOk={onCloseModal} />
    </div>
  );
};
