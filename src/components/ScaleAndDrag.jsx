import React, { useState } from "react";
import { motion } from "framer-motion";

const ScaleAndDrag = () => {
  return (
    <div className="container mt-6 mx-auto w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
      <motion.div
        className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          left: 0,
          right: 400,
          bottom: 0,
          top: 0,
        }}
      >
        <h1>Hello Test</h1>
      </motion.div>
    </div>
  );
};

export default ScaleAndDrag;
