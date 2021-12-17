import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading =(props) =>{
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ): (
                        <div>
                        </div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>;
    };

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Insterests", logoSrc: "interests.svg"}
    ];

    const programingSkillDetails =[
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "React and React Native"},
        {skill: "Express JS"},
        {skill: "Node JS"},
        {skill: "Mongo DB"}
    ];

    const projectDetails =[
        {
            title: "Note Taker",
            description: "https://pure-chamber-94605.herokuapp.com/" & " https://github.com/Brookethorson/note-taker"
        },
        {
            title: "Culinary Eats",
            description: "https://culinaryeats.herokuapp.com/" & "https://github.com/Dherington1/CulinaryEats "
        },
        {
            title: "Weather Dashboard",
            description: "https://brookethorson.github.io/weather-dashboard/"
        },
        {
            title: "Budget Tracker",
            description: " https://shielded-hamlet-51470.herokuapp.com/" & " https://github.com/Brookethorson/PWA-budget-tracker"
        },
        {
            title: "Brew Finder",
            description: "https://asecord92.github.io/brew-finder/"
        },
        {
            title: "CSS Portfolio",
            description: "https://brookethorson.github.io/Brooke-Portfolio/"
        }
    ]

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return (
        <div className= 'resume-container screen-container' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Bio Details'}/>
            </div>

        </div>
    )
}