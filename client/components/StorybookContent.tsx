export function StorybookContent() {
  return (
    <div className="w-full bg-white border border-tr-gray-200 rounded-lg overflow-hidden">
      {/* Storybook Header */}
      <div className="bg-tr-gray-50 px-4 py-3 border-b border-tr-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2d266e582fd54793ea4bc8b80f8254d3772b4f87?width=46"
            alt="Storybook"
            className="w-6 h-6"
          />
          <div>
            <h3 className="font-semibold text-tr-gray-900 text-sm">
              Storybook
            </h3>
            <p className="text-xs text-tr-gray-400">Saffron dialog component</p>
          </div>
        </div>
      </div>

      {/* Storybook Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-tr-gray-900">Dialog Component</h4>
          <p className="text-sm text-tr-gray-400 leading-relaxed">
            The Saffron dialog component is a reusable modal dialog
            implementation that follows Thomson Reuters design system
            guidelines. It provides accessible, keyboard-navigable modal dialogs
            with customizable content and actions.
          </p>
        </div>

        {/* Component Properties */}
        <div className="space-y-3">
          <h5 className="font-medium text-tr-gray-900 text-sm">Properties</h5>
          <div className="bg-tr-gray-50 rounded p-3 text-xs font-mono">
            <div className="space-y-1">
              <div>
                <span className="text-blue-600">isOpen</span>:{" "}
                <span className="text-green-600">boolean</span> - Controls
                dialog visibility
              </div>
              <div>
                <span className="text-blue-600">onClose</span>:{" "}
                <span className="text-green-600">function</span> - Callback when
                dialog closes
              </div>
              <div>
                <span className="text-blue-600">title</span>:{" "}
                <span className="text-green-600">string</span> - Dialog header
                title
              </div>
              <div>
                <span className="text-blue-600">size</span>:{" "}
                <span className="text-green-600">'sm' | 'md' | 'lg'</span> -
                Dialog size variant
              </div>
              <div>
                <span className="text-blue-600">variant</span>:{" "}
                <span className="text-green-600">'modal' | 'alert'</span> -
                Dialog type
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="space-y-3">
          <h5 className="font-medium text-tr-gray-900 text-sm">
            Usage Example
          </h5>
          <div className="bg-gray-900 text-green-400 rounded p-3 text-xs font-mono overflow-x-auto">
            <pre>{`<Dialog
  isOpen={isDialogOpen}
  onClose={() => setIsDialogOpen(false)}
  title="Confirm Action"
  size="md"
  variant="modal"
>
  <DialogContent>
    <p>Are you sure you want to proceed?</p>
  </DialogContent>
  <DialogActions>
    <Button variant="secondary" onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </DialogActions>
</Dialog>`}</pre>
          </div>
        </div>

        {/* Interactive Preview */}
        <div className="space-y-3">
          <h5 className="font-medium text-tr-gray-900 text-sm">
            Interactive Preview
          </h5>
          <div className="border border-tr-gray-200 rounded p-4 bg-tr-gray-50">
            <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
              Open Dialog Example
            </button>
            <p className="text-xs text-tr-gray-400 mt-2">
              Click to see the dialog component in action (demo mode)
            </p>
          </div>
        </div>

        {/* Accessibility Notes */}
        <div className="space-y-3">
          <h5 className="font-medium text-tr-gray-900 text-sm">
            Accessibility
          </h5>
          <ul className="text-sm text-tr-gray-400 space-y-1 list-disc list-inside">
            <li>Supports keyboard navigation (Tab, Escape, Enter)</li>
            <li>Implements ARIA dialog pattern with proper roles</li>
            <li>Focus management and focus trapping</li>
            <li>
              Screen reader compatible with aria-labelledby and aria-describedby
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
