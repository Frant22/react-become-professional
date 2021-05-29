import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carousel.scss';

import adviser from '../../images/adviser.jpg';
import astrologer from '../../images/astrologer.jpg';
import businessowner from '../../images/businessowner.jpg';
import caredirector from '../../images/caredirector.jpg';
import caregiver from '../../images/caregiver.jpg';
import nutririonist from '../../images/nutritionist.jpg';
import salesmanager from '../../images/salesmanager.jpg';
import trainer from '../../images/trainer.jpg';
import tutor from '../../images/tutor.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 4,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 605,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        width: 100,
        arrows: false,
      },
    },
  ],
};

function CarouselLine() {
  return (
    <Slider {...settings}>
      <div className="slick__container">
        <img
          src={adviser}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Financial Advisor
        </p>
      </div>
      <div>
        <img
          src={astrologer}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Astrologer
        </p>
      </div>
      <div>
        <img
          src={businessowner}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Сity Business Owner
        </p>
      </div>
      <div>
        <img
          src={caredirector}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Senior Care Director
        </p>
      </div>
      <div>
        <img
          src={caregiver}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Personal Care Giver
        </p>
      </div>
      <div>
        <img
          src={nutririonist}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Nutritionist
        </p>
      </div>
      <div>
        <img
          src={salesmanager}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Sales Agent
        </p>
      </div>
      <div>
        <img
          src={trainer}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Yoga Trainer
        </p>
      </div>
      <div>
        <img
          src={tutor}
          className="slick-image"
          alt="proffesion ilustartion"
        />
        <p className="slick-text">
          Tutor
        </p>
      </div>
    </Slider>
  );
}

export default CarouselLine;
