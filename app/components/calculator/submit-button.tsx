"use client";
import emailjs from "@emailjs/nodejs";

type Props = {
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
  console.log(
    " NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY",
    process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
  );
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        {
          estimate: props.estimate,
          type: props.type,
          signName: props.signName,
          email: props.email,
          name: props.name,
          phone: props.phone,
          isLit: props.isLit,
          isLogo: props.isLogo,
          widht: props.width,
          msg: props.msg,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          //   setEmail("");
          //   setMsg("");
          //   setSubject("");
          //   toast.success(
          //     "Thank you for your request. I will get back to you in 1-3 business day(s).",
          //     {
          //       position: "top-right",
          //       autoClose: 5000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       progress: undefined,
          //       theme: "light",
          //       transition: Flip,
          //     },
          //   );
        },
        (error) => {
          //   toast.error(
          //     "Error while sending message. Please let me know if the service is down. Thank you!",
          //     {
          //       position: "top-right",
          //       autoClose: 5000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       progress: undefined,
          //       theme: "light",
          //       transition: Flip,
          //     },
          //   );
        }
      );
  };

  return (
    <button
      onClick={sendEmail}
      type="button"
      className="ms-auto w-fit font-na text-2xl font-semibold mt-2 text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110"
    >
      GET ESTIMATE
    </button>
  );
};
