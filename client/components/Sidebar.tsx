import { Code, Files, PenTool } from "lucide-react";

export interface SourceAsset {
  id: string;
  brand: string;
  brandIcon: string;
  source: string;
  title: string;
  type: 'code' | 'documents' | 'design';
  contentType: 'storybook' | 'atrium' | 'w3c' | 'figma';
}

export const sourceAssets: SourceAsset[] = [
  {
    id: '1',
    brand: 'storybook',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/2d266e582fd54793ea4bc8b80f8254d3772b4f87?width=46',
    source: 'Storybook',
    title: 'Saffron dialog',
    type: 'code',
    contentType: 'storybook'
  },
  {
    id: '2',
    brand: 'tr',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/40d0c16ac8bf4592bb8f83c01cd70ad5068cfa30?width=64',
    source: 'Atrium',
    title: 'Modal and Dialogs',
    type: 'documents',
    contentType: 'atrium'
  },
  {
    id: '3',
    brand: 'w3c',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/f442e2187f541fe25a78a6c8f48e0d2c4eee061c?width=65',
    source: 'World Wide Web Consortium',
    title: 'Dialog (Modal) Pattern | APG | WAI | W3C',
    type: 'documents',
    contentType: 'w3c'
  },
  {
    id: '4',
    brand: 'w3c',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/f442e2187f541fe25a78a6c8f48e0d2c4eee061c?width=65',
    source: 'World Wide Web Consortium',
    title: 'Dialog (Modal) Pattern | APG | WAI | W3C',
    type: 'documents',
    contentType: 'w3c'
  },
  {
    id: '5',
    brand: 'figma',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/9ad507da15eed4e0b7513e9bb5d9f98111342718?width=92',
    source: 'Figma',
    title: 'Saffron component library',
    type: 'design',
    contentType: 'figma'
  },
  {
    id: '6',
    brand: 'figma',
    brandIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/9ad507da15eed4e0b7513e9bb5d9f98111342718?width=92',
    source: 'Figma',
    title: '{Project file name}: a11y annotation example',
    type: 'design',
    contentType: 'figma'
  }
];

function getTypeIcon(type: string) {
  switch (type) {
    case 'code':
      return <Code className="w-4 h-4 text-tr-gray-300" />;
    case 'documents':
      return <Files className="w-4 h-4 text-tr-gray-300" />;
    case 'design':
      return <PenTool className="w-4 h-4 text-tr-gray-300" />;
    default:
      return <Files className="w-4 h-4 text-tr-gray-300" />;
  }
}

interface SidebarProps {
  onSelectAsset?: (assetId: string) => void;
}

export function Sidebar({ onSelectAsset }: SidebarProps) {
  return (
    <div className="w-64 h-[728px] border-r border-tr-gray-200 flex flex-col">
      {sourceAssets.map((asset) => (
        <div
          key={asset.id}
          className={`relative flex items-start gap-2 p-4 pl-6 border-b border-tr-gray-200 cursor-pointer hover:bg-gray-50 ${
            asset.isActive ? 'bg-tr-gray-50' : ''
          }`}
          onClick={() => onSelectAsset?.(asset.id)}
        >
          {/* Active state indicator */}
          {asset.isActive && (
            <div className="absolute inset-0 -right-2">
              <svg
                width="266"
                height="81"
                viewBox="0 0 266 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M255.953 0.5L265.485 40.5L255.953 80.5H0.5V0.5H255.953Z"
                  fill="#FAFAFA"
                  stroke="#737373"
                  strokeWidth="1"
                />
              </svg>
            </div>
          )}
          
          {/* Content */}
          <div className="relative z-10 flex items-start gap-2 w-full">
            {/* Brand Icon */}
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center flex-shrink-0">
              <img
                src={asset.brandIcon}
                alt={asset.brand}
                className={`${
                  asset.brand === 'figma' ? 'w-12 h-12 -ml-2 -mt-2' : 
                  asset.brand === 'w3c' ? 'w-8 h-6' : 'w-6 h-6'
                }`}
              />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-tr-gray-400 leading-tight line-clamp-2 mb-0.5">
                {asset.source}
              </div>
              <div className="text-sm text-tr-gray-400 leading-tight line-clamp-3">
                {asset.title}
              </div>
            </div>

            {/* Type Icon */}
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded flex items-center justify-center">
                {getTypeIcon(asset.type)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
