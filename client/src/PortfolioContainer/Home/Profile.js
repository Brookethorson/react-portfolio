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
                        steps={ ["Full Stack Developer", 2000,
                                "MERN Stack Developer ", 2000,
                                "Cross Platform Developer", 2000,
                                "React/React Native ", 2000,  
                            ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                    Eager to learn full stack development. 
                    </span>
                    </span>
                    </div> 
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Resume {" "}
                        </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}
