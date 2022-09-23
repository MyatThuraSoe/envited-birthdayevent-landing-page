import React from "react";
import { useRef } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../assets/style/createEvent.css';

function CreateEvent() {
    const eventname = useRef();
    const hostname = useRef();
    const starttime = useRef();
    const endtime = useRef();
    const location = useRef();
    const navigate = useNavigate();
    function createAndNext() {
        navigate("/event", {
            state: {
                eventname: eventname.current.value,
                hostname: hostname.current.value,
                starttime: starttime.current.value,
                endtime: endtime.current.value,
                location: location.current.value
            },
        }
        );
    }
    return(
        <div className="create-event-container">
            <div className="create-event">
                <h2>Enter information about the Birthday Event</h2>
                <div className='birthday-event-form'>
                    <div>
                        <label htmlFor="eventName">Event Name</label>
                        <input id='eventName' className="eventName" name='eventName' type='text' ref={eventname}/>
                    </div>
                    <div>
                        <label htmlFor="hostName">Host Name</label>
                        <input id='hostName' className="hostName" name='hostName' type='text' ref={hostname}/>
                    </div>
                    <div>
                        <label htmlFor="startTime">Start Time</label>
                        <input id='startTime' className="startTime" name='startTime' type='text' placeholder="Eg. 18 August 2022, 6:00 PM" ref={starttime}/>
                    </div>
                    <div>
                        <label htmlFor="endTime">End Time</label>
                        <input id='endTime' className="endTime" name='endTime' type='text' placeholder="Eg. 19 August 2022, 10:30 AM" ref={endtime}/>
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input id='location' className="location" name='location' type='text' placeholder="Eg. Times Square Brm, New York City, New York" ref={location}/>
                    </div>
                    
                    <button onClick={createAndNext}>Next</button>
                </div>
            </div>
        </div>
    );
}
export default CreateEvent;