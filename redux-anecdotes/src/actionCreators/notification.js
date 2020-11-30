import { setNotificationText, unsetNotification } from '../reducers/notificationReducer';

export const setNotification = (notificationText, timeout) => {
  return dispatch => {
    dispatch(setNotificationText(notificationText));
    window.clearTimeout(window.timeoutId);
    window.timeoutId = window.setTimeout(() => dispatch(unsetNotification()), timeout);
  }  
}