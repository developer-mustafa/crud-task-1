import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <nav
      className={`p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">User Management</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="text-xl p-2 rounded-full"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
