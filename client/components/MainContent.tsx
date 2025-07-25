import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { StorybookContent } from "./StorybookContent";
import { AtriumContent } from "./AtriumContent";
import { W3CContent } from "./W3CContent";
import { FigmaContent } from "./FigmaContent";
import { SourceAsset } from "./Sidebar";

interface MainContentProps {
  selectedAsset: SourceAsset;
}

export function MainContent({ selectedAsset }: MainContentProps) {
  const [isResponseExpanded, setIsResponseExpanded] = useState(false);

  const toggleResponse = () => {
    setIsResponseExpanded(!isResponseExpanded);
  };

  const renderContent = () => {
    switch (selectedAsset.contentType) {
      case "storybook":
        return <StorybookContent />;
      case "atrium":
        return <AtriumContent />;
      case "w3c":
        return <W3CContent />;
      case "figma":
        return <FigmaContent />;
      default:
        return <FigmaContent />;
    }
  };

  const fullResponseText =
    "Yes, there is a modal dialog component available in the Saffron design system that you can reuse. The Saffron dialog component includes both modal and alert dialog variants, and it follows Thomson Reuters' accessibility acceptance criteria. The component is fully accessible with proper ARIA attributes, keyboard navigation support, and focus management. It supports multiple sizes (small, medium, large) and can be customized with different content types including forms, confirmations, and informational content. The dialog component also includes built-in animation transitions and responsive behavior to ensure optimal user experience across all device types. Additionally, it integrates seamlessly with the broader Saffron design system, maintaining consistent styling, spacing, and typography that aligns with Thomson Reuters' brand guidelines.";

  return (
    <div className="w-full p-4 h-[637px] overflow-y-auto">
      <div className="max-w-none space-y-4">
        {/* Q&A Reference Section */}
        <div className="p-4 border border-tr-gray-200 rounded-lg">
          {/* Question */}
          <div className="flex items-baseline gap-4 pb-4 mb-4 border-b border-tr-gray-200">
            <div className="w-[70px] text-tr-gray-900 font-sans text-base font-semibold leading-6 flex-shrink-0">
              Question
            </div>
            <div className="flex-1 text-tr-gray-900 font-sans text-base leading-6">
              Is there a modal dialog component that I can reuse?
            </div>
          </div>

          {/* Response */}
          <div
            className="flex items-start gap-4 cursor-pointer hover:bg-gray-50 rounded p-2 -m-2 transition-colors"
            onClick={toggleResponse}
          >
            <div className="w-[70px] text-tr-gray-900 font-sans text-base font-semibold leading-6 flex-shrink-0">
              Response
            </div>
            <button className="p-1 hover:bg-gray-100 rounded flex-shrink-0">
              {isResponseExpanded ? (
                <ChevronDown className="w-4 h-4 text-tr-gray-900" />
              ) : (
                <ChevronRight className="w-4 h-4 text-tr-gray-900" />
              )}
            </button>
            <div className="flex-1">
              <div
                className={`text-tr-gray-900 font-sans text-base leading-6 ${
                  isResponseExpanded ? "" : "line-clamp-2"
                }`}
              >
                {isResponseExpanded
                  ? fullResponseText
                  : "Yes, there is a modal dialog component available in the Saffron design system that you can reuse. The Saffron dialog component includes both modal and alert dialog variants, and it follows Thomson Reuters' accessibility acceptance criteria."}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Selected Source - Only show title when response is expanded */}
        {isResponseExpanded ? (
          <div className="p-4 border border-tr-gray-200 rounded-lg bg-tr-gray-50">
            <div className="flex items-center gap-3">
              <img
                src={
                  selectedAsset.brand === "figma"
                    ? "https://api.builder.io/api/v1/image/assets/TEMP/9ad507da15eed4e0b7513e9bb5d9f98111342718?width=92"
                    : selectedAsset.brand === "storybook"
                      ? "https://api.builder.io/api/v1/image/assets/TEMP/2d266e582fd54793ea4bc8b80f8254d3772b4f87?width=46"
                      : selectedAsset.brand === "tr"
                        ? "https://api.builder.io/api/v1/image/assets/TEMP/40d0c16ac8bf4592bb8f83c01cd70ad5068cfa30?width=64"
                        : "https://api.builder.io/api/v1/image/assets/TEMP/f442e2187f541fe25a78a6c8f48e0d2c4eee061c?width=65"
                }
                alt={selectedAsset.brand}
                className={`${
                  selectedAsset.brand === "figma"
                    ? "w-8 h-8"
                    : selectedAsset.brand === "w3c"
                      ? "w-8 h-6"
                      : "w-6 h-6"
                }`}
              />
              <div>
                <h3 className="font-semibold text-tr-gray-900 text-sm">
                  {selectedAsset.source}
                </h3>
                <p className="text-xs text-tr-gray-400">
                  {selectedAsset.title}
                </p>
              </div>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
}
