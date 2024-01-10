import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className="hidden"
      />
      <div
        className={`w-10 h-10 flex items-center justify-center border rounded transition-colors duration-300 ${
          isChecked
            ? "bg-blue-500 border-blue-500"
            : "border-gray-400 hover:bg-gray-200"
        }`}
      >
        {isChecked && <span className="text-white text-xl">✓</span>}
      </div>
      {/* <span className="text-sm">Check Me</span> */}
    </div>
  );
};

export default Checkbox;
