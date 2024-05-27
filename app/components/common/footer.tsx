import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full extra-dark-back justify-center">
      <div className="max-w-screen-2xl md:flex w-full">
        <div className="flex flex-col md:w-1/2 p-4 pt-8 pb-8 md:p-24 w-full">
          <p className="text-white mb-4 text-2xl font-na">OUR ADDRESS:</p>
          <p className="text-white mb-2 text-xl font-na">
            Toronto: 2789 Islington eve w. (back of the building)
          </p>
          <p className="text-white mb-8 text-lg">
            London: 125 King St ( back of the building)
          </p>

          <p className="text-white mb-4 text-2xl font-na">CONTACT US:</p>
          <a
            href="mailto:luxurydesignsigns@outlook.com"
            className="text-white mb-2 text-xl font-na underline"
          >
            luxurydesignsigns@outlook.com
          </a>
          <a
            href="tel:+15192828335"
            className="text-white mb-8 text-xl font-na"
          >
            +1(519)282-8335 - Rami
          </a>
          <a
            href="tel:+12263789562"
            className="text-white mb-2 text-xl font-na"
          >
            +1(226)378-9562 - Vlad
          </a>

          <div className="mt-auto flex flex-row gap-10 align-center items-center">
            <a
              target="_blank"
              href={"https://www.instagram.com/luxurydesignsigns/"}
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <Link href={""}>
              <svg
                className="w-6 h-6"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </Link>
            <a
              target="_blank"
              href={
                "https://www.facebook.com/profile.php?id=100077441899228&eav=AfbxXlc0MZU2rT3PEh6-duhq49or0ChPLa2moA0wKa-TXbUtWoECDKvNI7EPn3-4NMg&paipv=0&_rdr"
              }
            >
              <svg
                className="w-6 h-6"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.6938180454063!2d-81.24913232321578!3d42.984722995407964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef30a1eb7985f%3A0x40105a01993e7962!2sLuxury%20design%20signs!5e0!3m2!1sen!2sca!4v1712889992976!5m2!1sen!2sca"
            className="w-full md:h-full h-96"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
