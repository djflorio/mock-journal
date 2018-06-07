import * as actions from './NotificationsActions';
import reducer from './NotificationsReducer';

describe('Notifications', () => {

  const testMessage = {
    type: "neutral",
    text: "What's up?"
  }

  const testState = [
    { id: 1, type: "success", text: "you did well" },
    { id: 2, type: "danger", text: "you messed up" }
  ];

  it('should create action to add notification', () => {
    expect(actions.addNotification(testMessage)).toEqual({
      type: actions.ADD_NOTIFICATION,
      message: testMessage
    });
  });

  it('should create action to delete notification', () => {
    expect(actions.deleteNotification(5)).toEqual({
      type: actions.DELETE_NOTIFICATION,
      id: 5
    });
  });

  it('should add notification with addNotification', () => {
    expect(reducer(undefined, actions.addNotification(testMessage))).toEqual([
      expect.objectContaining(
        { type: testMessage.type, text: testMessage.text }
      )
    ]);
  });

  it('should delete notification with deleteNotification', () => {
    expect(reducer(testState, actions.deleteNotification(2))).toEqual([
      testState[0]
    ]);
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(testState, { type: "unexpected" })).toEqual(
      testState
    );
  });

});