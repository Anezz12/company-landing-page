/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
export default function References() {
  return (
    <section>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        {/* <Image
          width={500}
          height={300}
          alt="pict"
          src="/Image/logo-google.png"
        />
        <Image width={500} height={300} alt="pict" src="/Image/logo-ibm.png" />
        <Image
          width={500}
          height={300}
          alt="pict"
          src="/Image/logo-microsoft.png"
        />
        <Image width={500} height={300} alt="pict" src="/Image/logo-hp.png" />
        <Image
          width={500}
          height={300}
          alt="pict"
          src="/Image/logo-vector-graphics.png"
        /> */}
        <img src="/Image/logo-google.png" alt="" layout="fill" />
        <img src="/Image/logo-ibm.png" alt="" layout="fill" />
        <img src="/Image/logo-microsoft.png" alt="" layout="fill" />
        <img src="/Image/logo-hp.png" alt="" layout="fill" />
        <img src="/Image/logo-vector-graphics.png" alt="" layout="fill" />
      </div>
    </section>
  );
}
