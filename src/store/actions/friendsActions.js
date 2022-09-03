import * as api from "../../api";
import { openAlertNotification } from "./alertActions";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIEND_INVITATIONS: "FRIENDS.SET_PENDING_FRIEND_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogueHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogueHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendInvitations = (pendingInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIEND_INVITATIONS,
    pendingInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

const sendFriendInvitation = (data, closeDialogueHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertNotification(response?.exception?.response?.data));
      closeDialogueHandler();
    } else {
      dispatch(openAlertNotification("Invitation has been sent."));
      closeDialogueHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertNotification(response?.exception?.response?.data));
    } else {
      dispatch(openAlertNotification("Invitation is accepted."));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertNotification(response?.exception?.response?.data));
    } else {
      dispatch(openAlertNotification("Invitation is rejected."));
    }
  };
};
