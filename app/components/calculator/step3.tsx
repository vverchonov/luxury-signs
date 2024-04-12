export const Step3 = () => {
  return (
    <>
      <p className="text-white text-3xl mb-2 font-bold">Contact info:</p>
      <label
        htmlFor="name"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Your name:
      </label>
      <input
        type="text"
        id="name"
        // value={props.name}
        // onChange={(e: any) => {
        //   props.setName(e.target.value);
        // }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Adam Smith"
        required
      />

      <label
        htmlFor="brandName"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Contact Email:
      </label>
      <input
        type="email"
        id="brandName"
        // value={props.name}
        // onChange={(e: any) => {
        //   props.setName(e.target.value);
        // }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="example@gmail.com"
        required
      />

      <label
        htmlFor="brandName"
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        Contact phone number:
      </label>
      <input
        type="text"
        id="phone"
        // value={props.name}
        // onChange={(e: any) => {
        //   props.setName(e.target.value);
        // }}
        className="bg-white border border-gray-300 mb-4 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="(437) 981 32 33"
        required
      />
      <button
        type="button"
        className="ms-auto w-fit text-white main-back text-2xl focus:ring-4 focus:outline-none focus:ring-white font-medium px-4 py-2 text-center transform transition duration-500 hover:scale-110"
      >
        SUBMIT
      </button>
    </>
  );
};
