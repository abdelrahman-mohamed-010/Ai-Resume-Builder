import React, { useState } from "react";

const ClosingName: React.FC = () => {
  const [name, setName] = useState("Abdelrahman Mohamed");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 bg-transparent w-full"
    />
  );
};

export default ClosingName;
