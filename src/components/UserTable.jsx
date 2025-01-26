
import { useState } from "react";
import { useGetUsersQuery, useDeleteUserMutation } from "../redux/apiSlice";
import { FaTrash, FaEdit, FaSpinner } from "react-icons/fa"; // Import spinner from react-icons
import Modal from "./ConfirmModalBox"; // Import the Modal component

const UserTable = ({ onEdit }) => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteClick = (user) => {
    setSelectedUser(user); // Set the user to be deleted
    setIsModalOpen(true); // Open the modal
  };

  const handleConfirmDelete = () => {
    if (selectedUser) {
      deleteUser(selectedUser._id); // Call deleteUser API with the selected user ID
      setIsModalOpen(false); // Close the modal
      setSelectedUser(null); // Reset selected user
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      {/* Table Header */}
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {isLoading ? (
            // Show dynamic loading rows while the data is loading
            <tr>
              <td colSpan="3" className="py-3 px-6 text-center">
                {/* Professional spinner with animation */}
                <div className="flex justify-center items-center py-10">
                  <FaSpinner className="animate-spin text-blue-500 text-4xl" />
                  <span className="ml-3 text-gray-500 font-semibold">Loading data...</span>
                </div>
              </td>
            </tr>
          ) : isError ? (
            // Show error message if data fetch fails
            <tr>
              <td colSpan="3" className="py-3 px-6 text-center text-red-500">
                Error fetching users
              </td>
            </tr>
          ) : users && users.length > 0 ? (
            // Show user data if available
            users.map((user) => (
              <tr key={user._id} className="text-gray-700 hover:cursor-pointer border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">
                  {/* Action buttons */}
                  <button
                    className="text-blue-500 hover:cursor-pointer hover:text-blue-700 mr-3"
                    onClick={() => onEdit(user)}
                  >
                    <FaEdit className="inline-block text-2xl mb-2" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteClick(user)}
                  >
                    <FaTrash className="inline-block text-2xl" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            // Show no data message if no users available
            <tr>
              <td colSpan="3" className="py-3 px-6 text-center text-gray-500">No users available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Confirmation for Delete */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal on cancel
        onConfirm={handleConfirmDelete} // Confirm deletion
        userName={selectedUser ? selectedUser.name : ''}
      />
    </div>
  );
};

export default UserTable;
