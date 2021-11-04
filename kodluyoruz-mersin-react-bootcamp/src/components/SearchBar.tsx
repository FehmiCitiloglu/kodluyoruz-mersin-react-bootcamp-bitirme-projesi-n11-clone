// import { Input, Space } from "antd";
// import EnterButton from "./UI/EnterButton";

import SearchIcon from "./icons/SearchIcon";

// const { Search } = Input;

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        // alignContent: "center",
        background: "#EA222f",
        color: "#202020",
        margin: 0,
        padding: 0,
        width: "36rem",
        height: "2.625rem",
      }}
    >
      <input
        type="text"
        placeholder="Milyonlarca ürün arasında arama yapın"
        style={{
          margin: "auto",
          border: "none",
          height: "2.2rem",
          width: "33.125rem",
          padding: "10px 40px 10px 10px",
        }}
      />
      <button
        // onFocus={}
        style={{
          background: "#EA222f",
          marginRight: 10,
          padding: 0,
          width: 39,
          height: "2.438rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
