type Props = {
  isOpen: boolean;
  onOk: () => void;
};

export const Modal = (props: Props) => {
  return (
    <>
      {props.isOpen ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={props.onOk} className="close">
              &times;
            </span>
            <p className="text-2xl mb-4 font-bold">
              Thank you for your request!
            </p>
            <p className="text-xl mb-4">
              We will reach out to you as soon as possible.
            </p>
            <button
              onClick={props.onOk}
              type="button"
              className="text-white text-lg cursor-pointer font-semibold focus:ring-4 font-na focus:outline-none focus:ring-white font-medium px-6 py-2 text-center transform transition duration-500 hover:scale-110 main-back text-white"
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
