const ConfirmModalBox = ({ isOpen, onClose, onConfirm, userName }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-30">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold text-gray-700">Confirm Deletion</h2>
          <p className="text-gray-600 mt-2">Are you sure you want to delete the user "{userName}"?</p>
          <div className="mt-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmModalBox;
  