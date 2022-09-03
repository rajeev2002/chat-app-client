import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import DateSeparator from "./DateSeparator";

const Wrapper = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDate = (inputDate) => {
  return inputDate.toLocaleDateString("en-GB");
};

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <Wrapper>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        console.log(message);
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;
        const sameDay =
          index > 0 &&
          convertDate(new Date(messages[index].date)) ===
            convertDate(new Date(messages[index - 1].date));
        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator date={convertDate(new Date(message.date))} />
            )}
            <Message
              key={message._id}
              content={message.content}
              sameAuthor={sameAuthor}
              username={message.author.username}
              date={convertDate(new Date(message.date))}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStateToProps)(Messages);
