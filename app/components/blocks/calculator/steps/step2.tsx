import { TYPE1, TYPE2, TYPE3 } from "./step1";

type Props = {
  msg: string;
  setMsg: (val: string) => void;
  selectedType: string | null;
  name: string;
  setName: (val: string) => void;
  isLit: boolean;
  isLogo: boolean;
  setIsLit: (val: boolean) => void;
  setIsLogo: (val: boolean) => void;
  setWidth: (val: number) => void;
  height: number;
  width: number;
  setHeight: (val: number) => void;
};

export const Step2 = (props: Props) => {
  const type1 = () => {
    return (
      <>
        <p className="text-white text-3xl mb-2 font-bold">Step 2:</p>
        <div>
          <label
            htmlFor="brandName"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Type the name of the sign:
          </label>
          <input
            type="text"
            id="brandName"
            value={props.name}
            onChange={(e: any) => {
              props.setName(e.target.value);
            }}
            className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Example: Luxury Signs"
            required
          />

          <label className="inline-flex items-center cursor-pointer mr-4">
            <input
              type="checkbox"
              value={props.isLogo as any}
              onChange={(e: any) => {
                props.setIsLogo(e.target.checked);
              }}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">
              Do you have a logo?
            </span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={props.isLit as any}
              onChange={(e: any) => props.setIsLit(e.target.checked)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">
              Do you want your sign to be lit up?
            </span>
          </label>
        </div>
      </>
    );
  };

  const type2 = () => {
    return (
      <>
        <p className="text-white text-3xl mb-2 font-bold">Step 2:</p>
        <div className="flex flex-row gap-4 text-center">
          <div className="flex flex-col w-1/2 text-start">
            <label
              htmlFor="width"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Width:
            </label>
            <input
              type="number"
              id="width"
              value={props.width}
              onChange={(e: any) => {
                props.setWidth(e.target.value);
              }}
              className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ft"
              required
            />
          </div>
        </div>
      </>
    );
  };

  const type3 = () => {
    return (
      <>
        <label
          htmlFor="message"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Your message:
        </label>
        <textarea
          value={props.msg}
          onChange={(e: any) => {
            props.setMsg(e.target.value);
          }}
          id="message"
          rows={4}
          className="block mb-2 p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Please type what kind of signage are you looking for. Give us any details that can help on the job. Thanks!"
        ></textarea>
      </>
    );
  };

  return <>{type3()}</>;
};
