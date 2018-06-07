import React from 'react';
import './Notifications.css';
import FontAwesome from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import ReactMarkdown from 'react-markdown';

const Notifications = (props) => {
  return (
    <ul className="notifications">
      {
        props.notifications.map(n => (
          <li
            key={n.id}
            className={"notification notification--" + n.type}>
            <ReactMarkdown source={n.text}/>
            <FontAwesome
              icon={faTimes}
              className="notification__close"
              onClick={() => props.onNotificationClick(n.id)}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default Notifications;