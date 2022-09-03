const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    openAlertNotification: (content) =>
      dispatch(openAlertNotification(content)),
    closeAlertNotification: () => dispatch(closeAlertNotification()),
  };
};

export const openAlertNotification = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

const closeAlertNotification = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
