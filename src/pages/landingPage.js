import React from "react";
import { Link } from 'react-router-dom';

import LandingImage from '../assets/img/LandingPageImage.svg';

import '../assets/style/landingPage.css';

function LandingPage() {
    return(
        <div className="landing-container">
            <div className="landing">
                <div className="landing-text-container">
                    <h3>
                        Imagine if <span className="middle-heading">Snapchat</span> had events
                    </h3>
                    <h6>
                        Easily host and share events with your friends <br/> across any social media.
                    </h6>
                    <div className="landing-create-event-button-container inside">
                        <Link to='/create'>
                            <button>Create my event</button>
                        </Link>
                    </div>
                </div>
                <div className="landing-image-container">
                    <img src={LandingImage} alt='birthday event landing image'/>
                </div>
                
                <div className="landing-create-event-button-container outside">
                    <Link to='/create'>
                        <button>Create my event</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;