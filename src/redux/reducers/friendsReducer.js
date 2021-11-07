import { ADD_FRIEND, ADD_FAV_FRIEND, REMOVE_FAV_FRIEND, DELETE_FRIEND, GET_FRIEND, SHOW_LOADER } from '../constants';

import { addFavFriendHandler, addFriendHandler, delFriendHandler, removeFavFriendHandler } from '../appLogics';
const initialState = {
    showLoader: false,
    friendsList: []
};

const dummyData = [
    {
        id: 1,
        name: 'Rahul Gupta',
        isFavorite: true,
        isDeleted: false,
    },
    {
        id: 2,
        name: 'Shivangi Sharma',
        isFavorite: false,
        isDeleted: false,
        gender: 'F'
    },
    {
        id: 3,
        name: 'Akash Singh',
        isFavorite: false,
        isDeleted: false,
    }
]



const friendsReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case SHOW_LOADER:
            return { ...state, showLoader: payload.showLoader };
        case GET_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: dummyData };
        case ADD_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: addFriendHandler([...state.friendsList], payload.friendsDataToAdd) };
        case DELETE_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: delFriendHandler([...state.friendsList], payload.friendsDataToDel) };
        case ADD_FAV_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: addFavFriendHandler([...state.friendsList], payload.addFavFriendsData) };
        case REMOVE_FAV_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: removeFavFriendHandler([...state.friendsList], payload.delFavFriendsData) };
        default:
            return { ...state };
    }
};

export { friendsReducer };