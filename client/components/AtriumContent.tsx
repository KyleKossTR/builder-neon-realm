export function AtriumContent() {
  return (
    <div className="w-full bg-white border border-tr-gray-200 rounded-lg overflow-hidden">
      {/* Atrium Header */}
      <div className="bg-tr-gray-50 px-4 py-3 border-b border-tr-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/40d0c16ac8bf4592bb8f83c01cd70ad5068cfa30?width=64"
            alt="Atrium"
            className="w-6 h-6"
          />
          <div>
            <h3 className="font-semibold text-tr-gray-900 text-sm">
              Atrium Wiki
            </h3>
            <p className="text-xs text-tr-gray-400">
              Modal and Dialogs Documentation
            </p>
          </div>
        </div>
      </div>

      {/* Wiki Content */}
      <div className="p-6 space-y-6">
        {/* Introduction */}
        <div className="space-y-3">
          <h4 className="font-semibold text-tr-gray-900 text-lg">
            Modal and Dialog Components
          </h4>
          <p className="text-sm text-tr-gray-400 leading-relaxed">
            This page documents the modal and dialog components available in the
            Thomson Reuters design system. These components provide consistent
            user interface patterns for displaying overlayed content and user
            interactions.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-tr-gray-50 rounded-lg p-4">
          <h5 className="font-medium text-tr-gray-900 text-sm mb-3">
            Table of Contents
          </h5>
          <ul className="text-sm text-blue-600 space-y-1">
            <li>
              <a href="#overview" className="hover:underline">
                1. Overview
              </a>
            </li>
            <li>
              <a href="#types" className="hover:underline">
                2. Dialog Types
              </a>
            </li>
            <li>
              <a href="#implementation" className="hover:underline">
                3. Implementation Guidelines
              </a>
            </li>
            <li>
              <a href="#examples" className="hover:underline">
                4. Code Examples
              </a>
            </li>
            <li>
              <a href="#accessibility" className="hover:underline">
                5. Accessibility Requirements
              </a>
            </li>
          </ul>
        </div>

        {/* Overview Section */}
        <div className="space-y-3" id="overview">
          <h5 className="font-medium text-tr-gray-900">Overview</h5>
          <p className="text-sm text-tr-gray-400 leading-relaxed">
            Modal dialogs are popup windows that appear on top of the main
            content to capture user attention and require immediate action. They
            are used for confirmations, forms, alerts, and detailed information
            display.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Modals should be used sparingly and
              only when immediate user attention is required.
            </p>
          </div>
        </div>

        {/* Dialog Types */}
        <div className="space-y-3" id="types">
          <h5 className="font-medium text-tr-gray-900">Dialog Types</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-tr-gray-200 rounded p-3">
              <h6 className="font-medium text-sm text-tr-gray-900 mb-2">
                Modal Dialog
              </h6>
              <p className="text-xs text-tr-gray-400 mb-2">
                Standard modal with overlay that blocks interaction with
                background content.
              </p>
              <div className="bg-tr-gray-50 px-2 py-1 rounded text-xs font-mono text-tr-gray-600">
                variant="modal"
              </div>
            </div>
            <div className="border border-tr-gray-200 rounded p-3">
              <h6 className="font-medium text-sm text-tr-gray-900 mb-2">
                Alert Dialog
              </h6>
              <p className="text-xs text-tr-gray-400 mb-2">
                High-priority dialog for critical actions and confirmations.
              </p>
              <div className="bg-tr-gray-50 px-2 py-1 rounded text-xs font-mono text-tr-gray-600">
                variant="alert"
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guidelines */}
        <div className="space-y-3" id="implementation">
          <h5 className="font-medium text-tr-gray-900">
            Implementation Guidelines
          </h5>
          <ul className="text-sm text-tr-gray-400 space-y-2 list-disc list-inside">
            <li>
              Always provide a clear way to close the dialog (X button, Cancel,
              or Escape key)
            </li>
            <li>
              Use descriptive titles that clearly indicate the dialog's purpose
            </li>
            <li>Keep content concise and focused on the primary task</li>
            <li>Ensure proper keyboard navigation and focus management</li>
            <li>Test with screen readers for accessibility compliance</li>
          </ul>
        </div>

        {/* Code Examples */}
        <div className="space-y-3" id="examples">
          <h5 className="font-medium text-tr-gray-900">Code Examples</h5>
          <div className="bg-gray-900 text-green-400 rounded p-3 text-xs font-mono overflow-x-auto">
            <pre>{`// Basic Modal Implementation
import { Dialog } from '@tr/saffron-components';

function ConfirmationDialog({ isOpen, onClose, onConfirm }) {
  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose}
      title="Confirm Action"
      variant="modal"
    >
      <p>Are you sure you want to delete this item?</p>
      <div className="dialog-actions">
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} variant="destructive">
          Delete
        </Button>
      </div>
    </Dialog>
  );
}`}</pre>
          </div>
        </div>

        {/* Related Pages */}
        <div className="border-t border-tr-gray-200 pt-4">
          <h5 className="font-medium text-tr-gray-900 text-sm mb-3">
            Related Documentation
          </h5>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              Button Components
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              Form Components
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              Accessibility Guidelines
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
