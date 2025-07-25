export function W3CContent() {
  return (
    <div className="w-full bg-white border border-tr-gray-200 rounded-lg overflow-hidden">
      {/* W3C Header */}
      <div className="bg-tr-gray-50 px-4 py-3 border-b border-tr-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f442e2187f541fe25a78a6c8f48e0d2c4eee061c?width=65"
            alt="W3C"
            className="w-8 h-6"
          />
          <div>
            <h3 className="font-semibold text-tr-gray-900 text-sm">
              W3C Web Accessibility Initiative
            </h3>
            <p className="text-xs text-tr-gray-400">
              Dialog (Modal) Pattern | APG | WAI | W3C
            </p>
          </div>
        </div>
      </div>

      {/* W3C Content */}
      <div className="p-6 space-y-6">
        {/* Navigation breadcrumb */}
        <div className="text-xs text-blue-600">
          <span className="hover:underline cursor-pointer">
            WAI-ARIA Authoring Practices Guide
          </span>
          <span className="text-tr-gray-400 mx-2">&gt;</span>
          <span className="hover:underline cursor-pointer">
            Design Patterns and Widgets
          </span>
          <span className="text-tr-gray-400 mx-2">&gt;</span>
          <span className="text-tr-gray-900">Dialog (Modal)</span>
        </div>

        {/* Main heading */}
        <div className="space-y-3">
          <h4 className="font-bold text-tr-gray-900 text-xl">
            Dialog (Modal) Pattern
          </h4>
          <p className="text-sm text-tr-gray-400 leading-relaxed">
            A dialog is a window overlaid on either the primary window or
            another dialog window. Windows under a modal dialog are inert. That
            is, users cannot interact with content outside an active dialog
            window.
          </p>
        </div>

        {/* Key Characteristics */}
        <div className="space-y-3">
          <h5 className="font-semibold text-tr-gray-900">
            Key Characteristics
          </h5>
          <ul className="text-sm text-tr-gray-400 space-y-2 list-disc list-inside ml-4">
            <li>
              Inert content: Users cannot interact with content outside the
              active dialog
            </li>
            <li>
              Focus management: Focus moves to an element inside the dialog
            </li>
            <li>Escape hatch: Users can close the dialog by pressing Escape</li>
            <li>
              Modal overlay: Background content is typically dimmed or blurred
            </li>
          </ul>
        </div>

        {/* Accessibility Features */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-3">
            Accessibility Features
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h6 className="font-medium text-blue-800 mb-2">
                Keyboard Support
              </h6>
              <ul className="text-blue-700 space-y-1 list-disc list-inside ml-2">
                <li>
                  <kbd className="bg-blue-100 px-1 rounded">Tab</kbd> - Moves
                  focus to next focusable element
                </li>
                <li>
                  <kbd className="bg-blue-100 px-1 rounded">Shift + Tab</kbd> -
                  Moves focus to previous element
                </li>
                <li>
                  <kbd className="bg-blue-100 px-1 rounded">Escape</kbd> -
                  Closes the dialog
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-blue-800 mb-2">
                ARIA Attributes
              </h6>
              <ul className="text-blue-700 space-y-1 list-disc list-inside ml-2">
                <li>
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    role="dialog"
                  </code>
                </li>
                <li>
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    aria-labelledby
                  </code>
                </li>
                <li>
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    aria-describedby
                  </code>
                </li>
                <li>
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    aria-modal="true"
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Example */}
        <div className="space-y-3">
          <h5 className="font-semibold text-tr-gray-900">
            HTML Structure Example
          </h5>
          <div className="bg-gray-900 text-green-400 rounded p-3 text-xs font-mono overflow-x-auto">
            <pre>{`<div role="dialog" 
     aria-labelledby="dialog-title" 
     aria-describedby="dialog-desc"
     aria-modal="true">
  <h2 id="dialog-title">Confirmation</h2>
  <p id="dialog-desc">
    Are you sure you want to delete this item?
  </p>
  <div>
    <button type="button">Cancel</button>
    <button type="button">Delete</button>
  </div>
</div>`}</pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="space-y-3">
          <h5 className="font-semibold text-tr-gray-900">Best Practices</h5>
          <div className="space-y-3">
            <div className="border-l-4 border-green-400 bg-green-50 p-3">
              <h6 className="font-medium text-green-800 text-sm">✓ Do</h6>
              <ul className="text-sm text-green-700 space-y-1 mt-1 list-disc list-inside ml-2">
                <li>
                  Move focus to an appropriate element within the dialog when it
                  opens
                </li>
                <li>Trap focus within the dialog while it's open</li>
                <li>
                  Return focus to the element that triggered the dialog when it
                  closes
                </li>
                <li>Provide a visible way to close the dialog</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-400 bg-red-50 p-3">
              <h6 className="font-medium text-red-800 text-sm">✗ Don't</h6>
              <ul className="text-sm text-red-700 space-y-1 mt-1 list-disc list-inside ml-2">
                <li>Use dialogs for non-critical information</li>
                <li>Allow focus to escape the dialog while it's open</li>
                <li>Open multiple modal dialogs simultaneously</li>
                <li>Make dialogs too large or complex</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="border-t border-tr-gray-200 pt-4">
          <h5 className="font-medium text-tr-gray-900 text-sm mb-3">
            Related W3C Resources
          </h5>
          <div className="space-y-2">
            <a href="#" className="block text-blue-600 text-sm hover:underline">
              • ARIA Authoring Practices Guide (APG)
            </a>
            <a href="#" className="block text-blue-600 text-sm hover:underline">
              • Web Content Accessibility Guidelines (WCAG)
            </a>
            <a href="#" className="block text-blue-600 text-sm hover:underline">
              • ARIA in HTML Specification
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
