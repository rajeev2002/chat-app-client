import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import AddFriendDialogue from "./AddFriendDialogue";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const handleOpenFriendDialog = () => {
    setIsDialogueOpen(true);
  };

  const closeDialogueHandler = () => {
    setIsDialogueOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenFriendDialog}
      />
      <AddFriendDialogue
        isDialogueOpen={isDialogueOpen}
        closeDialogueHandler={closeDialogueHandler}
      />
    </>
  );
};

export default AddFriendButton;
