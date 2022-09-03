import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = ({ friends, onlineUsers }) => {
  const checkOnlineUsers = (friends, onlineUsers) => {
    friends.forEach((friend) => {
      const isUserOnline = onlineUsers.find(
        (user) => user.userId === friend.id
      );
      friend.isOnline = isUserOnline ? true : false;
    });
    return friends;
  };

  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend) => (
        <FriendsListItem
          id={friend.id}
          key={friend.id}
          username={friend.username}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStateToProps)(FriendsList);
