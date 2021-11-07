import React, { useRef, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import css from "../styles/friendsListStyle.module.css";

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
        className={css.addFriendInput}
      />
    </div>
  );
};

export default SearchComponent;
