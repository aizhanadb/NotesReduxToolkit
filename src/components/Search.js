import { useDispatch } from "react-redux";
import { search } from "../redux/searchReducer";

const Search = ({ handleSearchNote }) => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        onChange={(e) => dispatch(search(e.target.value))}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
