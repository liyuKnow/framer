import React, { useState } from "react";
import { motion } from "framer-motion";

const LoadingSequence = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
    },
  ]);
  const sequenceVariant = {
    appearingEffect: {
      x: 0,
      scale: 1.1,
    },
    largeStart: {
      x: 0,
      scale: 1.2,
    },
    smallEnding: {
      x: 600,
      scale: 0.3,
    },
  };

  const slowAppear = {
    hiddenStart: {
      opacity: 0,
    },
    visibleEnd: {
      opacity: 1,
    },
    transit: {
      duration: 5,
    },
  };

  const slowAppearPro = {
    initial: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
      },
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  };

  const childVariant = {
    initial: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        delay: 1,
      },
    },
  };

  const list = { hidden: { opacity: 0 }, avisible };
  const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <div className="container mt-6 mx-auto w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
      <motion.div
        className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
        variants={sequenceVariant}
        animate="largeStart"
        initial="smallEnding"
        // animate={{ x: 0 }}
        // initial={{ x: -100 }}
        // transition={{
        //   duration: 1,
        // }}
      >
        <h1>Hello Loading Sequence</h1>
      </motion.div>

      {/* <motion.div
        className="w-[300px] h-[300px] pt-10 mt-16 relative flex flex-col gap-5 justify-start items-center p-4 bg-indigo-300"
        variants={slowAppearPro}
        animate="visible"
        initial="initial"
        // transition="transit"
      >
        {[0, 1, 2].map((index) => {
          return (
            <motion.li
              key={index}
              className="bg-white w-[40px] h-[40px] list-none"
              variants={childVariant}
              animate="visible"
              initial="initial"
              // animate={{
              //   x: 0,
              //   scale: 1.1,
              // }}
            ></motion.li>
          );
        })}
      </motion.div> */}

      <motion.ul
        className="w-[300px] h-[300px] pt-10 mt-16 relative flex flex-col gap-5 justify-start items-center p-4 bg-indigo-300"
        animate="hidden"
        variants={list}
      >
        <motion.li
          variants={item}
          className="bg-white w-[40px] h-[40px] list-none"
        />
        <motion.li
          variants={item}
          className="bg-white w-[40px] h-[40px] list-none"
        />
        <motion.li
          variants={item}
          className="bg-white w-[40px] h-[40px] list-none"
        />
      </motion.ul>
    </div>
  );
};

export default LoadingSequence;
