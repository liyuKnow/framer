import React, { useState } from "react";
import { motion } from "framer-motion";

const BoxOne = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <>
      <div className="container mt-6 mx-auto w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
        <motion.div
          className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
          initial={{
            opacity: 1,
          }}
          animate={{
            x: isAnimating ? 640 : 0,
            rotate: isAnimating ? 360 : 0,
            opacity: isAnimating ? 1 : 0.4,
            backgroundColor: "green",
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 1,

            // type: "tween",
            // duration: 3,
          }}
          onClick={() => setIsAnimating(!isAnimating)}
        >
          <h1>Hello Test</h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex justify-center mt-10 items-center rounded-full h-[200px] bg-blue-200">
          What
        </div>
      </motion.div>
    </>
  );
};

export default BoxOne;
