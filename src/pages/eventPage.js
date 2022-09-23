import React from "react";
import BirthdayCake from '../assets/img/BirthdayCake.png';
import { useLocation, useResolvedPath } from "react-router-dom";
import '../assets/style/eventPage.css';
import { GoCalendar } from 'react-icons/go';
import { MdLocationOn } from "react-icons/md";
function EventPage(props) {
    const location = useLocation();
    var place = location.state.location.split(',');
    var placeLocation = location.state.location.replace(place[0] + ',','');
    return(
        <div className="event-container">
            <div className="event">
                <div className="birthdaycake-image-container">
                    <img src={BirthdayCake} className="birthdaycake-image" alt="birthday cake image"/>
                </div>
                <div className="birthday-event-data-container">
                    <h2>{location.state.eventname || 'Elysia birthday party'}</h2>
                    Hosted by <span>{location.state.hostname || 'Elysia'}</span>
                    <div className="event-data-row">
                        <div className="icon-container">
                            <GoCalendar/>
                        </div>
                        <div className="event-text-container">
                            <span>{ location.state.starttime }</span><br/>
                            To: <span> { location.state.starttime } </span>
                        </div>
                    </div>
                    <div className="event-data-row">
                        <div className="icon-container">
                            <MdLocationOn/>
                        </div>
                        <div className="event-text-container">
                            <span>{place[0]}</span><br/>
                            <span>{ placeLocation }</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default EventPage;