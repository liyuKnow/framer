import React from "react";
import { motion } from "framer-motion";

const BoxOne = () => {
  return (
    <div className="container mx-auto w-full h-[400px] p-4 bg-blue-100 flex flex-col justify-start items-start">
      <motion.div
        className="w-[300px] h-[300px] p-4 bg-green-200"
        initial={{
          opacity: 0.2,
        }}
        animate={{
          x: 600,
          rotate: 180,
          opacity: 0.9,
        }}
      ></motion.div>
    </div>
  );
};

export default BoxOne;
