// src/components/ThemeToggle.js
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
    console.log('darkmode : ', darkMode);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className={`z-20 fixed top-32 right-5  p-3 rounded-full flex justify-center items-center border transition-all ${darkMode ? ' bg-black border-white text-yellow-400 ' : ' bg-white border-black  text-blue-400'}`}
        >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
    );
};

export default ThemeToggle;