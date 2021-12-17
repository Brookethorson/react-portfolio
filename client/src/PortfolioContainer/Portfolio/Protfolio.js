import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from '../../utilities/ScrollService'
import Animations from "../../utilities/Animations"
import './Portfolio.css'


export default function Portfolio(props){

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    };

    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin:0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responisve:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        }
    }
    return(
        <div>
            <ScreenHeading
            title={'Portfolio'}
            subHeading={'Previous Builds'}
            />

            <section className='portfolio-section' id={props.id || ''}>
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='portfolio-carousel'{...options}>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                        <img src="img/Portfolio/WeatherDashboard.png" alt='no internet connection'></img>
                                        <h5>Weather Dashboard</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p>
                                            
                                            https://brookethorson.github.io/weather-dashboard/ 
                                            https://github.com/Brookethorson/weather-dashboardather Dashboard
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                        <img src="img/Portfolio/BrewFinder.png" alt='no internet connection'></img>
                                        <h5>BrewFinder</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p>
                                            
                                            https://asecord92.github.io/brew-finder/
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                    <img src="img/Portfolio/BudgetTracker.png" alt='no internet connection'></img>
                                        <h5>Budget Tracker</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p> 
                                            https://github.com/Brookethorson/PWA-budget-tracker 
                                            https://shielded-hamlet-51470.herokuapp.com/ 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                        <img src="img/Portfolio/CSSPortfolio.png" alt='no internet connection'></img>
                                        <h5>CSSPortfolio</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p>  
                                            https://brookethorson.github.io/Brooke-Portfolio/
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                        <img src="img/Portfolio/CulinaryEats.png" alt='no internet connection'></img>
                                        <h5>Culinary Eats</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p>
                                            https://culinaryeats.herokuapp.com/
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='port-item'>
                                <div className='project-info'>
                                        <img src="img/Portfolio/NoteTaker.png" alt='no internet connection'></img>
                                        <h5>Note Taker</h5>
                                    </div>
                                    <div className='port-comment'>
                                        <p>
                                            https://pure-chamber-94605.herokuapp.com/ 
                                            https://github.com/Brookethorson/note-taker 
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>

        </div>
    )
}