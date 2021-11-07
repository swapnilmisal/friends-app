import React, { useState, useEffect, useRef } from "react";
import { Input } from "antd";
import {
  addFriendsAction,
  showLoadingAction,
} from "../redux/actions/friendsActions";
import { connect } from "react-redux";

import css from '../styles/friendsListStyle.module.css';

const AddFriendComponent = (props) => {
  const initialState = "";
  const [name, setName] = useState(initialState);
  const inputRef = useRef(null);
  const addNewFriend = (e) => {
    e.preventDefault();
    if (name) {
      props.showLoadingActionProps();
      setTimeout(() => {
        props.addFriendsActionProps(name);
        setName(initialState);
        inputRef.current.focus();
      }, 200);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const updateInputFiled = (e) => {
    const lettersRegEx = /^[A-Z a-z]+$/;
    if (e.target.value.match(lettersRegEx)) {
      setName(e.target.value);
    } else if (e.target.value === "") {
      setName(e.target.value);
    }
  };
  return (
    <div>
      <form onSubmit={addNewFriend}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Add New Friend"
          value={name}
          onChange={(e) => {
            updateInputFiled(e);
          }}
          bordered={false}
          className={css.addFriendInput}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingActionProps: () => {
      dispatch(showLoadingAction());
    },
    addFriendsActionProps: (name) => {
      dispatch(addFriendsAction(name));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddFriendComponent);
