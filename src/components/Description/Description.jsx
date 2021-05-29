import React from 'react';
import Button from '../Button/Button';

function Description() {
  return (
    <div className="description">
      <h2 className="description__title">
        Become a five-star professional!
      </h2>
      <div className="description__text">
        Join the growing community of professional icarians.
        Use the iCaria professional services to launch and grow your business,
        manage your clients, organize your schedule, and simplify your payments.
        With iCaria certification, your customers will be assured safe and secure
        access to services.
      </div>
      <Button url="#information" />
    </div>
  );
}

export default Description;
