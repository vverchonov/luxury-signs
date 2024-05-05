"use client";
import emailjs from "@emailjs/nodejs";

type Props = {
  onSuccess: () => void;
  estimate: string;
  type: string | null;
  signName: string;
  email: string;
  name: string;
  phone: string;
  isLit: boolean;
  isLogo: boolean;
  width: string | number;
  msg: string;
};

export const SubmitButton = (props: Props) => {
  return (
    <button
      type="submit"
      className="ms-auto w-fit font-na text-2xl font-semibold mt-2 text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110"
    >
      GET ESTIMATE
    </button>
  );
};
