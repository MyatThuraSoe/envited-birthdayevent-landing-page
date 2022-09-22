import React from "react";
import { Link } from 'react-router-dom';
function CreateEvent() {
    return(
        <div>
            <Link to='/event'>
                <button>Event Page</button>
            </Link>
        </div>
    );
}
export default CreateEvent;