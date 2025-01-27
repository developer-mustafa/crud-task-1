import { useState, useEffect } from 'react';
import { useCreateUserMutation, useUpdateUserMutation } from '../redux/apiSlice';
import { toast, ToastContainer } from 'react-toastify'; // Import Toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import PropTypes from 'prop-types';

const UserForm = ({ editingUser, clearEditingUser }) => {
  const [createUserMutation, { isLoading: isCreating }] = useCreateUserMutation();
  const [updateUserMutation, { isLoading: isUpdating }] = useUpdateUserMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
      });
    }
  }, [editingUser]);

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

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      if (editingUser) {
        const response = await updateUserMutation({
          id: editingUser._id,
          ...formData,
        }).unwrap();
        toast.success('User updated successfully!'); // Toast for success
        console.log('User updated successfully:', response);
        clearEditingUser();
       
      } else {
        await createUserMutation(formData);
        toast.success('User added successfully!'); // Toast for success
      }
      setFormData({ name: '', email: '' });
    } catch (error) {
      toast.error('An error occurred. Please try again.'); // Toast for error
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> {/* Toast Container */}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className={`w-full p-3 border rounded-md text-gray-700 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
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
            className={`w-full p-3 border rounded-md text-gray-700 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={isCreating || isUpdating}
        >
          {isCreating || isUpdating ? (
            <div className="spinner-border animate-spin border-4 border-t-4 border-white rounded-full w-6 h-6 mx-auto"></div>
          ) : (
            editingUser ? 'Update User' : 'Add User'
          )}
        </button>
      </form>
    </div>
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
