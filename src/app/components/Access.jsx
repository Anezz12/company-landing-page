import Image from "next/image";
export default function Access() {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center px-10 my-20">
        <h3 className=" mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          Access Clipboard Anywhere
        </h3>
        <p className="max-w-3xl mx-auto leading-9 text-center text-grayishBlue mb-24 text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <Image
          width={800}
          height={500}
          alt="pict"
          src="/Image/image-devices.png"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
