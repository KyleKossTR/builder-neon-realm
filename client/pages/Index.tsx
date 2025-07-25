import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar, sourceAssets, SourceAsset } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { SummaryPanel } from "../components/SummaryPanel";

export default function Index() {
  const [selectedAsset, setSelectedAsset] = useState<SourceAsset>(sourceAssets[4]); // Default to Figma

  const handleCloseExplorer = () => {
    console.log("Close explorer clicked");
  };

  const handleSelectAsset = (asset: SourceAsset) => {
    setSelectedAsset(asset);
  };

  return (
    <div className="min-h-screen bg-white min-w-[1280px]">
      <Header onCloseExplorer={handleCloseExplorer} />
      <div className="flex h-[728px] w-full">
        <Sidebar
          selectedAssetId={selectedAsset.id}
          onSelectAsset={handleSelectAsset}
        />
        <div className="w-[704px]">
          <MainContent selectedAsset={selectedAsset} />
        </div>
        <SummaryPanel />
      </div>
    </div>
  );
}
