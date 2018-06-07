import * as actions from './NotificationsActions';
import findIndex from 'lodash/findIndex';

const notifications = (state=[], action) => {
  switch(action.type) {
    case actions.ADD_NOTIFICATION: {
      return [
        ...state,
        action.message
      ];
    }
    case actions.DELETE_NOTIFICATION: {
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;
    }
    default: return state;
  }
}

export default notifications;