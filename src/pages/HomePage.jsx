import { useState } from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

const HomePage = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column (User Form) */}
          <div className="bg-gradient-to-t from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-5">Manage Users</h2>
            <UserForm
              editingUser={editingUser}
              clearEditingUser={() => setEditingUser(null)}
            />
          </div>

          {/* Right Column (User Table) */}
          <div className="bg-gradient-to-t from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-5">User List</h2>
            <UserTable onEdit={(user) => setEditingUser(user)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
