import React from 'react'
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/Brookethorson'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/brooke-thorson-45518415a/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        </div>
                    </div>
                
                    <div className='profile-detials-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, my name is <span className='highlighted-text'>Brooke.</span> 
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Full Stack", 1500,
                                    "MERN Stack", 1500,
                                    "Cross Platform", 1500,
                                    "React/React Native", 1500
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Enthusiastic about full stack developement! Eager to continue to learn!
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                       <button className='btn primary-btn'>
                           {""}
                           Contact Me {""}
                       </button>
                       <a href='Brooke.pdf' download='Resume Brooke.pdf'>
                           <button className='btn highlighted-btn'>Resume</button>
                       </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}