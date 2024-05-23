"use client";

import { use, useState } from "react";
import emailjs from "@emailjs/nodejs";
import { Step1, TYPE1, TYPE2 } from "../steps/step1";
import { Step2 } from "../steps/step2";
import { Step3 } from "../steps/step3";
import { SubmitButton } from "./submit-button";
import { Modal } from "@/app/components/common/modal";

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
    clearForn();
  };

  const clearForn = () => {
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

  const sendRequest = (img: any) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        {
          estimate: getTotal(),
          type: selectedType,
          signName: name,
          email: email,
          name: clientName,
          phone: phone,
          isLit: isLit,
          isLogo: isLogo,
          widht: width,
          msg: msg,
          file: img !== null && img !== undefined ? img : "0",
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          onSuccessSubmit();
        },
        (error) => {
          alert(
            "We encountered unexpected problem. Please let us know! Thank you :)"
          );
          clearForn();
        }
      );
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    if (file !== undefined) {
      reader.readAsDataURL(file);
      reader.onload = async (e: any) => {
        const img = reader.result;
        sendRequest(img);
      };
    } else {
      sendRequest(null);
    }
  };

  return (
    <div className="w-100 flex flex-col md:flex-row">
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
          <a href="tel:+12263789562" className="text-white  font-na text-2xl">
            +1(226)378-9562 Vlad
          </a>
          <a href="tel:+12263789562" className="text-white  font-na text-2xl">
            +1(226)378-9562 Rami
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
            {/* <label htmlFor="file-upload" className="custom-file-upload ms-auto">
              Upload Image
            </label> */}
            {/* <input
              id="file-upload"
              accept="image/gif, image/jpeg, image/png"
              onChange={handleChange}
              type="file"
            /> */}
          </div>
        </div>
      </form>
      <Modal isOpen={showModal} onOk={onCloseModal} />
    </div>
  );
};
