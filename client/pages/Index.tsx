import { useState } from "react";
import { Header } from "../components/Header";

export default function Index() {
  const handleCloseExplorer = () => {
    console.log("Close explorer clicked");
  };

  return (
    <div className="min-h-screen bg-white min-w-[1280px]">
      <Header onCloseExplorer={handleCloseExplorer} />
      <div className="p-8">
        <h2 className="text-xl text-tr-gray-900">Header loaded successfully</h2>
      </div>
    </div>
  );
}
