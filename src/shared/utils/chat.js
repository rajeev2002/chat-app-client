import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const usersInActiveConversation = [userId, receiverId];
    updateDirectChatHistoryIfSameConversationActive({
      participants,
      usersInActiveConversation,
      messages,
    });
  }
};

const updateDirectChatHistoryIfSameConversationActive = ({
  participants,
  usersInActiveConversation,
  messages,
}) => {
  const result = participants.every((participantId) =>
    usersInActiveConversation.includes(participantId)
  );

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
