import React, { useState } from "react";
import { motion } from "framer-motion";

const Interactive = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <>
      <div className="w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
        <motion.div
          className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
          initial={{
            opacity: 1,
          }}
          animate={{
            x: isAnimating ? 500 : 0,
            rotate: isAnimating ? 360 : 0,
            opacity: isAnimating ? 1 : 0.4,
            backgroundColor: "green",
          }}
          transition={{
            type: "spring",
            stiffness: 5,
            damping: 1,

            // type: "tween",
            // duration: 3,
          }}
          onClick={() => setIsAnimating(!isAnimating)}
        >
          <h1>Hello Test</h1>
        </motion.div>
      </div>
    </>
  );
};

export default Interactive;
