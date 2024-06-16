export default function Clipboard() {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        <h3 className=" mb-8 text-4xl font-bold text-darkGrayishBlue">
          Clipboard for iOS and MacOS
        </h3>
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          {
            "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
          }
        </p>
        {/* Button Container */}
        <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <div className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 cursor-pointer">
            Download for Ios
          </div>
          <div className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 cursor-pointer">
            Download for Mac
          </div>
        </div>
      </div>
    </section>
  );
}
