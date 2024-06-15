import Image from "next/image";
export default function Access() {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center px-10 my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <Image
          width={500}
          height={500}
          alt="pict"
          src="/Image/image-devices.png"
        />
      </div>
    </section>
  );
}
