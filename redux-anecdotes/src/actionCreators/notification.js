import { setNotificationText, unsetNotification } from '../reducers/notificationReducer';

export const setNotification = (notificationText, timeout) => {
  return dispatch => {
    dispatch(setNotificationText(notificationText));
    window.setTimeout(() => dispatch(unsetNotification()), timeout);
  }  
}