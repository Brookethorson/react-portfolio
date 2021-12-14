import React from 'react';
import Typical from 'react-typical';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>



            <div className='profile-details-name'>
                <span className="primary-text">
                    {" "}
                    Hello! My name is <span className='highlighted-text'>Brooke.</span>
                </span>
                </div> 
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={ ["Full Stack Developer", 1000,
                                "MERN Stack Developer ", 1000,
                                "Cross Platform Developer", 1000,
                                "React/React Native ", 1000,  
                    ]}
                    />
                        </h1>
                    </span>
                    </div> 
                </div>
            </div>
        </div>
    );
}
