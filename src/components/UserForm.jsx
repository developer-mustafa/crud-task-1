import { useState, useEffect } from 'react';
import { useCreateUserMutation, useUpdateUserMutation } from '../redux/apiSlice'; // Correct hook import
import PropTypes from 'prop-types';

const UserForm = ({ editingUser, clearEditingUser }) => {
  const [createUserMutation, { isLoading: isCreating }] = useCreateUserMutation();
  const [updateUserMutation, { isLoading: isUpdating }] = useUpdateUserMutation(); // Make sure this is imported and used

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  // Set form data when editingUser changes
  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
      });
    }
  }, [editingUser]);

  // Utility function for validation
  const validate = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required and cannot be blank.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required and cannot be blank.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email must be a valid email address.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // If validation fails, return early
    if (Object.keys(validationErrors).length > 0) return;

    try {
      // Submit the form based on whether we are editing or creating a user
      if (editingUser) {
        // Call the updateUser mutation with id and formData
        const response = await updateUserMutation({
          id: editingUser._id, // Pass the id from the editingUser
          ...formData, // Pass the updated user data
        }).unwrap(); // use unwrap to get the result directly
        console.log('User updated successfully:', response); // Handle success
        clearEditingUser(); // Clear editing state after successful update
      } else {
        await createUserMutation(formData); // If no editingUser, create a new user
      }

      // Reset the form after submission
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error updating user:', error);
     
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className={`w-full p-3 border rounded-md text-gray-700 border-green-500  ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className={`w-full p-3 border rounded-md text-gray-700 border-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        disabled={isCreating || isUpdating} // Disable button when loading
      >
        {isCreating || isUpdating ? (
          <div className="spinner-border animate-spin border-4 border-t-4 border-white rounded-full w-6 h-6 mx-auto"></div>
        ) : (
          editingUser ? 'Update User' : 'Add User'
        )}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  editingUser: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  clearEditingUser: PropTypes.func.isRequired,
};

export default UserForm;
