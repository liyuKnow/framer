import React from "react";
import { motion, useAnimation } from "framer-motion";

const Interactive = () => {
  const animControl = useAnimation();
  return (
    <>
      <div className="w-full h-screen overflow-hidden p-4 bg-blue-100 flex flex-col justify-start items-start">
        <div className="flex flex-row gap-10">
          <button
            onClick={() => {
              animControl.start({
                x: 600,
                transition: {
                  duration: 2,
                },
              });
            }}
            className="w-[130px] h-[50px] rounded hover:bg-green-700 bg-green-300 px-4 py-2 text-white"
          >
            Move Right
          </button>
          <button
            onClick={() => {
              animControl.start({
                x: 0,
                transition: {
                  duration: 1,
                },
              });
            }}
            className="w-[130px] h-[50px] rounded hover:bg-green-700 bg-green-300 px-4 py-2 text-white"
          >
            Move Left
          </button>
          <button
            onClick={() => {
              animControl.start({
                borderRadius: "50%",
                transition: {
                  duration: 1,
                },
              });
            }}
            className="w-[130px] h-[50px] rounded hover:bg-green-700 bg-green-300 px-4 py-2 text-white"
          >
            Circle
          </button>
          <button
            onClick={() => {
              animControl.start({
                borderRadius: 0,
                transition: {
                  duration: 1,
                },
              });
            }}
            className="w-[130px] h-[50px] rounded hover:bg-green-700 bg-green-300 px-4 py-2 text-white"
          >
            Square
          </button>
          <button
            onClick={() => {
              animControl.stop();
            }}
            className="w-[130px] h-[50px] rounded hover:bg-green-700 bg-green-300 px-4 py-2 text-white"
          >
            Stop
          </button>
        </div>

        <motion.div
          animate={animControl}
          con
          className="w-[300px] h-[300px] mt-6 relative p-4 bg-indigo-300"
        ></motion.div>
      </div>
    </>
  );
};

export default Interactive;
