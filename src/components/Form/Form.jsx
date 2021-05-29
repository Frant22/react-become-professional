import React, { useState } from 'react';
import Button from '../Button/Button';
import DateOfBirth from '../DatePicker/DateOfBirth';

function Form() {
  const [email, setEmail] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [message, setMessage] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [dateOfBirthError, setDateOfBirthError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        setEmailError(false);
        break;

      case 'name':
        setNameValue(value);
        setNameError(false);
        break;

      case 'message':
        setMessage(value);
        setMessageError(false);
        break;
      default:
        break;
    }
  };

  function emailValidator(querry) {
    const emailValidationRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValidationRegExp.test(String(querry).toLowerCase())) {
      return true;
    }
    return false;
  }

  const submit = (event) => {
    event.preventDefault();

    if (nameValue.length < 3) {
      setNameError(true);
      return;
    }
    if (!emailValidator(email)) {
      setEmailError(true);
      return;
    }

    if (!message) {
      setMessageError(true);
      return;
    }
    if (!dateOfBirth) {
      setDateOfBirthError(true);
      return;
    }
    setDateOfBirthError(false);
    setNameValue('');
    setMessage('');
    setEmail('');
    setDateOfBirth();

    alert('Form sent!');
  };

  return (
    <form
      className="form"
      action="#"
      noValidate
      onSubmit={(event) => submit(event)}
    >
      <input
        type="text"
        name="name"
        placeholder="Name*"
        onChange={(event) => handleChange(event)}
        className={
          nameError
            ? 'form__input form__input--error'
            : 'form__input'
        }
        value={nameValue}
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        onChange={(event) => handleChange(event)}
        className={
          emailError
            ? 'form__input form__input--error'
            : 'form__input'
        }
        value={email}
      />
      <DateOfBirth
        setDateOfBirth={setDateOfBirth}
        dateOfBirth={dateOfBirth}
        dateOfBirthError={dateOfBirthError}
        setDateOfBirthError={setDateOfBirthError}
      />

      <textarea
        type="text"
        name="message"
        placeholder="Message*"
        onChange={(event) => handleChange(event)}
        className={
          messageError
            ? 'form__input form__input--wide form__input--error'
            : 'form__input form__input--wide'
        }
        value={message}
      />
      <Button />
    </form>
  );
}

export default Form;
