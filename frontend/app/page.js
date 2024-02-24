import Calender from "@/components/Calender";
import JoinRoom from "@/components/JoinRoom";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-[#F9F9E0]">
      <Navbar />

      <Calender />

      <JoinRoom />
    </div>
  );
};

export default page;
