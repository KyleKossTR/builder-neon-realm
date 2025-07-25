import { ChevronRight } from "lucide-react";

export function MainContent() {
  return (
    <div className="flex-1 p-4 h-[637px] overflow-y-auto">
      <div className="max-w-none">
        {/* Q&A Reference Section */}
        <div className="p-4 border border-tr-gray-200 rounded-lg mb-4">
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
          <div className="flex items-start gap-4">
            <div className="w-[70px] text-tr-gray-900 font-sans text-base font-semibold leading-6 flex-shrink-0">
              Response
            </div>
            <button className="p-1 hover:bg-gray-50 rounded flex-shrink-0">
              <ChevronRight className="w-4 h-4 text-tr-gray-900" />
            </button>
            <div className="flex-1">
              <div className="text-tr-gray-900 font-sans text-base leading-6 line-clamp-2">
                Yes, there is a modal dialog component available in the Saffron design system that you can reuse. The Saffron dialog component includes both modal and alert dialog variants, and it follows Thomson Reuters' accessibility acceptance criteria.
              </div>
            </div>
          </div>
        </div>

        {/* Component Screenshot */}
        <div className="w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/99ba084bf94eb5576b31c1244329140e424e3b20?width=1348"
            alt="Saffron component library dialog examples"
            className="w-full max-w-[674px] h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}
