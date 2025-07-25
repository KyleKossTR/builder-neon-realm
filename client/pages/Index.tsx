import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { SummaryPanel } from "../components/SummaryPanel";

export default function Index() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>("5"); // Default to Figma active state

  const handleSelectAsset = (assetId: string) => {
    setSelectedAsset(assetId);
  };

  const handleCloseExplorer = () => {
    // In a real app, this might navigate back or close a modal
    console.log("Close explorer clicked");
  };

  return (
    <div className="min-h-screen bg-white min-w-[1280px]">
      {/* Header */}
      <Header onCloseExplorer={handleCloseExplorer} />

      {/* Main Layout */}
      <div className="flex h-[728px] w-full">
        {/* Sidebar */}
        <Sidebar onSelectAsset={handleSelectAsset} />

        {/* Main Content */}
        <div className="w-[704px]">
          <MainContent />
        </div>

        {/* Summary Panel */}
        <SummaryPanel />
      </div>
    </div>
  );
}
