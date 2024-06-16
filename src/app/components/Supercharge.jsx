import Image from "next/image";
export default function SuperCharge() {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center px-10 my-20">
        <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          Supercharge your workflow
        </h3>
        <p className="max-w-3xl mx-auto leading-9 text-center text-grayishBlue mb-16 text-xl">
          {"we've got the tools to boost your productivity."}
        </p>

        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center space-y-5">
            <Image
              width={75}
              height={75}
              // layout="fill"
              alt="pict"
              src="./Image/icon-blacklist.svg"
              className="mb-6"
            />
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Create Blacklists
            </h5>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center space-y-5">
            <Image
              width={75}
              height={75}
              alt="pict"
              src="./Image/icon-text.svg"
              className="mb-6"
            />
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Plain Text Snippets
            </h5>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center space-y-5">
            <Image
              width={75}
              height={75}
              alt="pict"
              src="./Image/icon-preview.svg"
              className="mb-6"
            />
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Sneak Preview
            </h5>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
