import React from 'react';
import { connect } from 'react-redux';

import { addNotification, deleteNotification } from './NotificationsActions';

import Notifications from './Notifications';

class NotificationsContainer extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <Notifications
        notifications={this.props.notifications}
        onNotificationClick={this.props.onNotificationClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      const text = "This is a demo website made by [Dan Florio](http://www.danflorio.com). All data is cleared when you close the site.";
      dispatch(addNotification({ type: "neutral", text: text}));
    },
    onNotificationClick: (id) => {
      dispatch(deleteNotification(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);