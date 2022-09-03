import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { getActions } from "../../store/actions/alertActions";
import { connect } from "react-redux";

const AlertNotification = ({
  showAlertMessage,
  alertMessageContent,
  closeAlertNotification,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertNotification}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AlertNotification);
