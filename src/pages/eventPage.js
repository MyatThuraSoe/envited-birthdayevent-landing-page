import React from "react";
import BirthdayCake from '../assets/img/BirthdayCake.png';

import '../assets/style/eventPage.css';

function EventPage(props) {
    return(
        <div className="event-container">
            <div className="event">
                <div className="birthdaycake-image-container">
                    <img src={BirthdayCake} className="birthdaycake-image" alt="birthday cake image"/>
                </div>
                <div className="birthday-event-data-container">
                    <h2>Birthday Bash</h2>
                    <span>Hosted by {props.name || 'Elysia'}</span>
                </div>
            </div>
        </div>
    );
}
export default EventPage;