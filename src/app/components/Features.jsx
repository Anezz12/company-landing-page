"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section>
      <motion.div
        className="max-w-6xl mx-auto text-center px-10 my-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      >
        <div className=" relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <Image
              width={700}
              height={700}
              src="/Image/image-computer.png"
              alt=""
              loading="lazy"
              className="md:absolute top-0 right-[50%]"
            />
          </div>
          {/* item container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-20 md:text-left md:pl-16">
            {/* item 1 */}
            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Quick Search
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                iCloud Sync
              </h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Completely History
              </h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
