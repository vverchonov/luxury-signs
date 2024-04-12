type Props = {
  selectedType: string | null;
  onSelect: (e: any) => void;
};

export const TYPE1 = "Outdoor channel letters or channel box";
export const TYPE2 = "Lightbox front replacement";
export const TYPE3 = "Other";

export const Step1 = (props: Props) => {
  const { onSelect, selectedType } = props;

  const isStep2Done = () => {
    return true;
  };
  return (
    <>
      <p className="text-white text-3xl mb-2 font-bold">Step 1:</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <input
            onClick={(e: any) => props.onSelect(TYPE1)}
            id="default-radio-1"
            type="radio"
            value="Outdoor channel letters or channel box"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Outdoor channel letters or channel box
          </label>
        </div>
        <div className="flex items-center">
          <input
            onClick={(e: any) => props.onSelect(TYPE2)}
            id="default-radio-2"
            type="radio"
            value="Lightbox front replacement"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Lightbox front replacement
          </label>
        </div>
        <div className="flex items-center">
          <input
            onClick={(e: any) => props.onSelect(TYPE3)}
            id="default-radio-3"
            type="radio"
            value="Other"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-3"
            className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Other
          </label>
        </div>
      </div>
    </>
  );
};
