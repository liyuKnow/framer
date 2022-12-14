import React from "react";
import { motion } from "framer-motion";

const KeyFrames = () => {
  const buttonVariant = {
    hover: {
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1],
      //   textShadow: "opx opx 8px rgb(0,0,0)",
      boxShadow: "opx opx 8px rgb(0,0,0)",
    },
  };
  return (
    <div className="bg-slate-300 w-full h-screen flex flex-col items-center">
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className="px-8 py-2 mt-10 border-orange-800 shadow-lg outline-none bg-transparent rounded-full border-2 "
      >
        Click Me !
      </motion.button>
      <motion.div
        className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
        initial={{}}
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 5,
        }}
      ></motion.div>
    </div>
  );
};

export default KeyFrames;
