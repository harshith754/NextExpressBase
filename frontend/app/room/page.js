"use client";
import { useEffect, useState } from "react";

const Room = ({ searchParams }) => {
  const { name } = searchParams;

  const [message, setMessage] = useState("loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMessage(data.message);
      });
  }, []);
  return (
    <div>
      <div>Room {name}</div>

      <div>Server Message {message}</div>
    </div>
  );
};

export default Room;
