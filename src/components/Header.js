import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/themeReducer";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>Notes</h1>

      <button className="save" onClick={() => dispatch(toggleDarkMode())}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
