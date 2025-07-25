import { Plus, CircleQuestion, Bell, Grid, X, ArrowRightFromLine } from "lucide-react";

interface HeaderProps {
  onCloseExplorer?: () => void;
}

export function Header({ onCloseExplorer }: HeaderProps) {
  return (
    <>
      {/* Main Header */}
      <header className="w-full min-w-[1280px] h-14 bg-white border-b border-tr-gray-200 flex items-center px-8">
        <div className="flex items-center gap-4 flex-1">
          {/* Logo and Product Identity */}
          <div className="flex items-center gap-4 flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a4e23e45962eb1f42391c5812f1ca0003e9e3148?width=386"
              alt="Thomson Reuters Logo"
              className="h-6.5"
            />
            <span className="text-tr-orange-400 font-clario text-[19px] font-bold leading-[100%]">
              Product Name
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* New Conversation Button */}
          <button className="flex items-center gap-2 px-2 py-1 bg-black text-tr-gray-100 rounded border border-black text-base font-semibold min-h-8">
            <Plus className="w-4 h-4" />
            New conversation
          </button>

          {/* Divider */}
          <div className="w-px h-10 bg-tr-gray-300 mx-1"></div>

          {/* Global Icons */}
          <button className="p-3 hover:bg-gray-50 rounded">
            <CircleQuestion className="w-4 h-4 text-tr-gray-900" />
          </button>
          <button className="p-3 hover:bg-gray-50 rounded">
            <Bell className="w-4 h-4 text-tr-gray-900" />
          </button>
          <button className="p-3 hover:bg-gray-50 rounded">
            <Grid className="w-4 h-4 text-tr-gray-900" />
          </button>

          {/* Avatar */}
          <button className="p-2 hover:bg-gray-50 rounded">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/35f26ada4873950822d613b9f89e35116a4bc99e?width=48"
              alt="User Avatar"
              className="w-6 h-6 rounded-full border border-tr-gray-300"
            />
          </button>
        </div>
      </header>

      {/* Sub Header */}
      <div className="w-full h-12 bg-tr-gray-50 border-b border-tr-gray-200 flex items-center">
        {/* Window Action */}
        <div className="w-64 px-6 py-2 flex items-center gap-2 border-r border-tr-gray-200 h-full">
          <button 
            onClick={onCloseExplorer}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4 text-tr-gray-900" />
          </button>
          <span className="text-tr-gray-900 font-knowledge text-base font-medium">
            Explore sources
          </span>
        </div>

        {/* Source Title */}
        <div className="flex-1 px-4 py-2 flex items-center justify-center">
          <span className="text-tr-gray-900 font-knowledge text-base font-medium">
            Figma: Saffron component library
          </span>
        </div>

        {/* Summary */}
        <div className="w-80 px-4 py-2 flex items-center gap-2 border-l border-tr-gray-200 h-full">
          <button className="p-2 hover:bg-gray-100 rounded">
            <ArrowRightFromLine className="w-4 h-4 text-tr-gray-900" />
          </button>
          <span className="text-tr-gray-900 font-knowledge text-base font-medium flex-1">
            Summary
          </span>
        </div>
      </div>
    </>
  );
}
