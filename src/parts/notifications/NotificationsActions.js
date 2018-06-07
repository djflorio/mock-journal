import shortid from 'shortid';

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

export const addNotification = (message) => {
  message.id = shortid.generate();
  return {
    type: ADD_NOTIFICATION,
    message: message
  }
}

export const deleteNotification = (id) => ({
  type: DELETE_NOTIFICATION,
  id
});