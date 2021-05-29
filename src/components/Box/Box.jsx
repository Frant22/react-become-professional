import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
  const { url, title, text } = props;

  return (
    <div className="box header__box">
      <img className="box__image" src={url} alt="box-decoration" />
      <div className="box__decoration box__decoration--green" />
      <div className="box__decoration box__decoration--blue" />
      <h2 className="box__title">
        {title}
      </h2>
      <div className="box__decoration box__decoration--turquoise" />
      <p className="box__text">
        {text}
      </p>
    </div>
  );
};

Box.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Box;
