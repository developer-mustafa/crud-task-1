import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-user" element={<AddUserPage />} />
        
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
