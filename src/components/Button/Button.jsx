import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { url } = props;

  return (
    <button type="submit" className="button">
      <a href={url} className="button__link">
        Request Info
      </a>
    </button>
  );
}

export default Button;

Button.propTypes = {
  url: PropTypes.string.isRequired,
};
