import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-4 border-purple-500"
    : "text-[#ADB7BE] border-b border-transparent";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white hover:border-b-4 hover:border-purple-500 p-1 ${buttonClasses}`}
    >
      {children}
    </button>
  );
}

export default TabButton;
