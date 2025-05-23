import React from 'react'
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white p-1 ${buttonClasses}`}
    >
      {children}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500"
      />
    </button>
  );
}

export default TabButton;
