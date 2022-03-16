import './SearchBox.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      type='search'
      className={`search-box ${className}`}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
