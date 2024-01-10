import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "HabitHive",
  description:
    "Empower yourself to build and maintain positive habits with HabitHive. Set goals, track progress, and join a supportive community dedicated to personal growth.",
  author: "Harshith K.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Josefin+Slab&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
