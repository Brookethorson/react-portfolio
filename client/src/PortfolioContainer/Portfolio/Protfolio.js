import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Portfolio.css";
import WeatherDashboard from '../../../src/img/Portfolio/WeatherDashboard.png';
import BrewFinder from '../../../src/img/Portfolio/BrewFinder.png';
import BudgetTracker from '../../../src/img/Portfolio/BudgetTracker.png';
import CSSPortfolio from '../../../src/img/Portfolio/CSSPortfolio.png';
import CulinaryEats from '../../../src/img/Portfolio/CulinaryEats.png';
import NoteTaker from '../../../src/img/Portfolio/NoteTaker.png';
import Artforyourheart from '../../../src/img/Portfolio/Artforyourheart.png'

export default function Portfolio(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responisve: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <ScreenHeading title={"Portfolio"} subHeading={"Previous Builds"} />

      <section className="portfolio-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="portfolio-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                      src={WeatherDashboard}
                      alt="no internet connection"
                    ></img>
                    <h5>Weather Dashboard </h5>
                    <h6> <a href={'https://brookethorson.github.io/weather-dashboard/'}>
                      Click here to view app.</a></h6>    
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                      src={BrewFinder}
                      alt="no internet connection"
                    ></img>
                    <h5>BrewFinder</h5>
                    <h6> <a href={'https://asecord92.github.io/brew-finder/'}>
                      Click here to view app.</a></h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                    src={BudgetTracker}
                      alt="no internet connection"
                    ></img>
                    <h5>Budget Tracker</h5>
                    <h6> <a href={'https://shielded-hamlet-51470.herokuapp.com/'}>
                      Click here to view app.</a></h6>  
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                    src={CSSPortfolio}
                      alt="no internet connection"
                    ></img>
                    <h5>CSSPortfolio</h5>
                    <h6> <a href={'https://brookethorson.github.io/Brooke-Portfolio'}>
                      Click here to view app.</a></h6>  
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                    src={CulinaryEats}
                      alt="no internet connection"
                    ></img>
                    <h5>Culinary Eats</h5>
                    <h6> <a href={'https://culinaryeats.herokuapp.com/'}>
                      Click here to view app.</a></h6>  
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                      src={NoteTaker}
                      alt="no internet connection"
                    ></img>
                    <h5>Note Taker</h5>
                    <h6> <a href={'https://pure-chamber-94605.herokuapp.com/'}>
                      Click here to view app.</a></h6> 
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="project-info">
                    <img
                      src={Artforyourheart}
                      alt="no internet connection"
                    ></img>
                    <h5>Art For Your Heart</h5>
                    <h6> <a href={'https://final-project-drb.herokuapp.com/'}>
                      Click here to view app.</a></h6> 
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
