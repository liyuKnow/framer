import React from "react";
import { motion } from "framer-motion";

const BoxOne = () => {
  return (
    <div className="container mt-6 mx-auto w-full h-[400px] p-4 bg-blue-100 flex flex-col justify-start items-start">
      <motion.div
        className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
        initial={{
          opacity: 0.4,
        }}
        animate={{
          x: 600,
          // rotate: 90,
          opacity: 0.8,
          backgroundColor: "green",
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 1,

          // type: "tween",
          // duration: 3,
        }}
      ></motion.div>
    </div>
  );
};

export default BoxOne;
