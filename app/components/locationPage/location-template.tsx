import { Wrapper } from "../common/wrapper";

export const LocationTemplate = (props: any) => {
  return (
    <div className="min-h-screen flex justify-center align-center p-4 md:p-24 items-center">
      <Wrapper
        customClass={"flex flex-col justify-center align-center w-full h-full"}
      >
        <div className="flex flex-col md:flex-row gap-6 md:mt-0 mt-24">
          <div className="w-full md:w-6/12 flex flex-col gap-8 justify-center">
            <div className="flex gap-5 flex-col align-center justify-center items-center">
              <h1 className="text-5xl text-center font-semibold text-black">
                {props.mainText}
              </h1>
              <p className="font-na mb-4 text-xl">{props.text}</p>
              <div className="flex flex-col md:flex-row gap-4 my-auto text-center items-center">
                <a
                  href="/#calculator-block"
                  type="button"
                  className="estim-button m-2 mt-auto text-white dark-back w-fit font-na font-semibold text-xl uppercase focus:ring-4 focus:outline-none focus:ring-white font-medium px-3 py-4 text-center transform transition duration-500 hover:scale-110"
                >
                  Get Estimate
                </a>
                <a
                  href="tel:+15192828335"
                  className="text-black text-left font-na text-2xl"
                >
                  +1(519)282-8335 Rami
                </a>
                <a
                  href="tel:+12263789562"
                  className="text-black text-left font-na text-2xl"
                >
                  +1(226)378-9562 Vlad
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <img className="rounded-xl" src={props.src} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
