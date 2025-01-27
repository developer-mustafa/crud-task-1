/* eslint-disable react/prop-types */

import { useState } from "react";
import { useGetUsersQuery, useDeleteUserMutation } from "../redux/apiSlice";
import { FaTrash, FaEdit, FaSpinner } from "react-icons/fa"; 
import { toast, ToastContainer } from 'react-toastify'; // Import Toast
import Modal from "./ConfirmModalBox"; 

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
      deleteUser(selectedUser._id); 
      toast.error('User Deleted successfully!')
      setIsModalOpen(false); // Close the modal
      setSelectedUser(null); // Reset selected user
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-auto bg-white h-[90%] rounded-lg shadow-md">
       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {/* Table Header */}
      <table className="min-w-full ">
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
            // Show dynamic loading 
            <tr>
              <td colSpan="3" className="py-3 px-6 text-center">
                {/*  spinner with animation */}
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
