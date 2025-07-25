import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { SummaryPanel } from "../components/SummaryPanel";

export default function Index() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>("5");

  const handleCloseExplorer = () => {
    console.log("Close explorer clicked");
  };

  const handleSelectAsset = (assetId: string) => {
    setSelectedAsset(assetId);
  };

  return (
    <div className="min-h-screen bg-white min-w-[1280px]">
      <Header onCloseExplorer={handleCloseExplorer} />
      <div className="flex h-[728px] w-full">
        <Sidebar onSelectAsset={handleSelectAsset} />
        <div className="w-[704px]">
          <MainContent />
        </div>
        <SummaryPanel />
      </div>
    </div>
  );
}
