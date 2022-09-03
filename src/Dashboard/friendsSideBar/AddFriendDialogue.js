import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputWithLabel from "../../shared/components/InputWithLabel";
import { validateMail } from "../../shared/utils/validators";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { getActions } from "../../store/actions/friendsActions";
import { connect } from "react-redux";

const AddFriendDialogue = ({
  isDialogueOpen,
  closeDialogueHandler,
  sendFriendInvitation,
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetMailAddress: mail,
      },
      closeDialogueHandler
    );
    setMail("");
  };

  const handleDialogueClose = () => {
    closeDialogueHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <Dialog open={isDialogueOpen} onClose={handleDialogueClose}>
      <DialogTitle>Add a Friend</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the email id of the friend you want to send invitation
          to.
        </DialogContentText>
        <InputWithLabel
          value={mail}
          setValue={setMail}
          label="E-Mail"
          type="text"
          placehoder="please enter email id"
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialogue);
