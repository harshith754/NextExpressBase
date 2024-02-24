"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinRoom = () => {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    // Handle the submission logic here
    router.push(`/room?name=${inputValue}`);
  };
  return (
    <div className="text-black">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your name..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JoinRoom;
