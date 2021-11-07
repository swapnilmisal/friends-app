import React, { useRef, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// const { Search } = Input;

const SearchComponent = (props) => {
  const newInputRef = useRef(null);
  const { searchText, onSearchChange } = props;
  useEffect(() => {
    newInputRef.current.focus();
  }, []);
  return (
    <div>
      <Input
        ref={newInputRef}
        placeholder="Enter your friend's name"
        value={searchText}
        type="text"
        onChange={onSearchChange}
        allowClear
        suffix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchComponent;
