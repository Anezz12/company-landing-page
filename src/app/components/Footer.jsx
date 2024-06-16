/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className=" max-w-6xl mx-auto text-center px-10">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src="./Image/logo.svg" alt="" className="scale-50" />

          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-32 py-1">
              <a href="#">
                <img
                  src="/Image/icon-facebook.svg"
                  alt=""
                  className="duration-200 ficon"
                />
              </a>
              <a href="#">
                <img
                  src="/Image/icon-twitter.svg"
                  alt=""
                  className="duration-200 ficon"
                />
              </a>
              <a href="#">
                <img
                  src="/Image/icon-instagram.svg"
                  alt=""
                  className="duration-200 ficon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
