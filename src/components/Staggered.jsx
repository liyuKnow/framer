import React from "react";
import { motion } from "framer-motion";

const Staggered = () => {
  const articles = [
    { id: 1, title: "Great times", excerpt: "Await you" },
    { id: 2, title: "Great times", excerpt: "Await you" },
    { id: 3, title: "Great times", excerpt: "Await you" },
    { id: 4, title: "Great times", excerpt: "Await you" },
    { id: 5, title: "Great times", excerpt: "Await you" },
    { id: 6, title: "Great times", excerpt: "Await you" },
  ];

  const parentDiv = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childItems = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    // <div className="flex flex-wrap justify-around bg-white">
    //   {articles.map((article, i) => (
    //     <motion.div
    //       key={article.id}
    //       className="w-1/3 m-4 bg-[#a2e] text-white p-5 rounded"
    //       initial={{
    //         opacity: 0,
    //         translateX: i % 2 === 0 ? -50 : 50,
    //         translateY: -50,
    //       }}
    //       animate={{ opacity: 1, translateX: 0, translateY: 0 }}
    //       transition={{ duration: 0.3, delay: i * 0.2 }}
    //     >
    //       <h2>{article.title}</h2>
    //       <p>{article.excerpt}</p>
    //     </motion.div>
    //   ))}
    // </div>
    <motion.div
      className="w-full flex flex-col gap-5 justify-center items-center bg-indigo-300"
      variants={parentDiv}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-green-300 w-[300px] h-[40px]"
        variants={childItems}
      >
        1
      </motion.div>
      <motion.div
        className="bg-green-300 w-[300px] h-[40px]"
        variants={childItems}
      >
        2
      </motion.div>
      <motion.div
        className="bg-green-300 w-[300px] h-[40px]"
        variants={childItems}
      >
        3
      </motion.div>
      <motion.div
        className="bg-green-300 w-[300px] h-[40px]"
        variants={childItems}
      >
        4
      </motion.div>
      <motion.div
        className="bg-green-300 w-[300px] h-[40px]"
        variants={childItems}
      >
        5
      </motion.div>
    </motion.div>
  );
};

export default Staggered;
