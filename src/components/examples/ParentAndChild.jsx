import React, { useState } from "react";
import { motion } from "framer-motion";

const ParentAndChild = () => {
  const parentVariant = {
    init: {
      x: "-100vw",
    },
    anim: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const childVariant = {
    init: {
      x: -10,
      opacity: 0,
    },
    anim: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
        <motion.div
          variants={parentVariant}
          initial="init"
          animate="anim"
          className="w-[300px] h-[300px] mt-6 relative  flex flex-col justify-center items-center gap-5 p-4 bg-indigo-300"
        >
          {[1, 2, 3].map((box, index) => {
            return (
              <motion.li
                key={index}
                className="w-[40px] h-[40px] bg-indigo-700 list-none"
                variants={childVariant}
              ></motion.li>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default ParentAndChild;
