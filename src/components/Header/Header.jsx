import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Box from '../Box/Box';

import firstimage from '../../images/firstimage.svg';
import secondimage from '../../images/secondimage.svg';
import thirdimage from '../../images/thirdimage.svg';
import fourthimage from '../../images/fourthimage.svg';

const settings = {
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
};

function Header() {
  return (
    <header className="header">
      <div className="header__decoration header__decoration--pink" />
      <div className="header__decoration header__decoration--violet" />
      <h1 className="header__heading">
        Why Our Directory
      </h1>
      <div className="header__decoration header__decoration--blue" />
      <div className="header__content">
        <Box
          url={firstimage}
          title="Offer coupons"
          text="Grow your customer base by offering free coupons that are advertised
            on social media and discoverable through Google search.
            No hidden or upfront fees and you get a free professional profile.
            Engage your customers and leads while expanding your business."
        />
        <Box
          url={secondimage}
          title="Search and discover"
          text="Our directory is accessed by families across US and Canada to find local
            service providers and facilities by profession, services offered, or ratings
            and rankings. We match families based on their needs."
        />
        <Box
          url={thirdimage}
          title="Improve satisfaction"
          text="Get higher ratings and better reviews through transparency, media-rich profiles,
            engaging social blog, professional articles, and accreditation.Create events
            to promote your business and advertise them on social media."
        />
        <Box
          url={fourthimage}
          title="Improve satisfaction"
          text="Get more referrals through improved ratings and reviews, performance monitoring,
          recommendations from other professionals, and profile search boosting.
          Your profiles are discoverable on Google search."
        />
      </div>
      <div className="header__slider">
        <Slider {...settings}>
          <Box
            url={firstimage}
            title="Offer coupons"
            text="Grow your customer base by offering free coupons that are advertised
            on social media and discoverable through Google search.
            No hidden or upfront fees and you get a free professional profile.
            Engage your customers and leads while expanding your business."
          />
          <Box
            url={secondimage}
            title="Search and discover"
            text="Our directory is accessed by families across US and Canada to find local
            service providers and facilities by profession, services offered, or ratings
            and rankings. We match families based on their needs."
          />
          <Box
            url={thirdimage}
            title="Improve satisfaction"
            text="Get higher ratings and better reviews through transparency, media-rich profiles,
            engaging social blog, professional articles, and accreditation.Create events
            to promote your business and advertise them on social media."
          />
          <Box
            url={fourthimage}
            title="Improve satisfaction"
            text="Get more referrals through improved ratings and reviews, performance monitoring,
          recommendations from other professionals, and profile search boosting.
          Your profiles are discoverable on Google search."
          />
        </Slider>
      </div>
      <div className="header__decoration header__decoration--pink" />
    </header>
  );
}

export default Header;
