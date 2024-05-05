import { SubmitButton } from "../components/submit-button";

type Props = {
  clientName: string;
  setClientName: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
};

export const Step3 = (props: Props) => {
  return (
    <>
      <p className="text-white text-3xl mb-2 font-bold">Contact info:</p>
      <label
        htmlFor="clientName"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Your name:
      </label>
      <input
        type="text"
        id="clientName"
        value={props.clientName}
        onChange={(e: any) => {
          props.setClientName(e.target.value);
        }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Adam Smith"
        required
      />

      <label
        htmlFor="emailField"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Contact Email:
      </label>
      <input
        type="email"
        id="emailField"
        value={props.email}
        onChange={(e: any) => {
          props.setEmail(e.target.value);
        }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="example@gmail.com"
        required
      />

      <label
        htmlFor="phone"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Contact phone number:
      </label>
      <input
        type="tel"
        id="phone"
        value={props.phone}
        onChange={(e: any) => {
          props.setPhone(e.target.value);
        }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="(437) 981 32 33"
        required
      />
    </>
  );
};
