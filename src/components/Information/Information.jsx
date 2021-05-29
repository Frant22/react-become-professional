import React from 'react';

import Form from '../Form/Form';

function Information() {
  return (
    <div className="information" id="information">
      <div className="information__content">
        <h2 className="information__title">
          Request info
        </h2>
        <p className="information__text">
          Got a question? Need to see a demo? Want to start your free trial subscription?
          We&apos;d love to hear from you! Contact us and we will get back to you shortly.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default Information;
