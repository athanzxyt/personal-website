// src/app/layout.js

import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Athan Zhang",
  description: "Athan's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="w-full max-w-screen-lg space-y-8 p-4">
          <Header />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
