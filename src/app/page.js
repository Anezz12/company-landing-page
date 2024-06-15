import Header from "./components/Header";
import Image from "next/image";
import Snippets from "./components/Snippets";
import Features from "./components/Features";
import Access from "./components/Access";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/Image/bg-header-desktop.png"
          alt="Background Image"
          layout="fill"
          style={{
            objectFit: "contain",
            objectPosition: "top",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10  md:hidden block">
        <Image
          src="/Image/bg-header-mobile.png"
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
      <Header />
      <Snippets />
      <Features />
      <Access />
    </>
  );
}
