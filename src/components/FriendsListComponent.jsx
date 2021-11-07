import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getFriendsAction,
  showLoadingAction,
  deleteFriendsAction,
  addFavFriendAction,
  removeFavFriendAction,
} from "../redux/actions/friendsActions";

import { Table } from "antd";
import { getTableColumns } from "./FriendsColumn";

const FriendsListComponent = (props) => {
  useEffect(() => {
    let timer;
    const loadData = () => {
      const { showLoadingActionProps, getFriendsActionProps } = props;
      showLoadingActionProps();
      timer = setTimeout(() => {
        getFriendsActionProps();
      }, 200);
    };
    loadData();
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <h1>FriendsListComponent</h1>
      <Table
        rowKey={(record) => {
          return record.id;
        }}
        columns={getTableColumns(
          props.addFavFriendActionProps,
          props.removeFavFriendActionProps,
          props.deleteFriendsActionProps
        )}
        dataSource={props.friendsList}
        loading={props.showLoader}
        showHeader={false}
        width={"50%"}
      />
    </div>
  );
};
const mapStateToProps = (appState) => {
  return {
    showLoader: appState.friendsState.showLoader,
    friendsList: appState.friendsState.friendsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingActionProps: () => {
      dispatch(showLoadingAction());
    },
    getFriendsActionProps: () => {
      dispatch(getFriendsAction());
    },
    addFavFriendActionProps: (friendsData) => {
      dispatch(addFavFriendAction(friendsData));
    },
    removeFavFriendActionProps: (friendsData) => {
      dispatch(removeFavFriendAction(friendsData));
    },
    deleteFriendsActionProps: (friendsData) => {
      dispatch(deleteFriendsAction(friendsData));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsListComponent);
