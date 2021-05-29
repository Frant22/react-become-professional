import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateOfBirth({
  setDateOfBirth,
  dateOfBirth,
  dateOfBirthError,
  setDateOfBirthError,
}) {
  return (
    <DatePicker
      name="date"
      selected={dateOfBirth}
      onChange={(date) => {
        setDateOfBirth(date);
        setDateOfBirthError(false);
      }}
      className={
        dateOfBirthError
          ? 'form__input form__input--error'
          : 'form__input'
      }
      placeholderText="Date of Birth*"
      minDate={new Date('01-01-1960')}
      maxDate={new Date('01-01-2004')}
      max="2022-12-31"
    />
  );
}

DateOfBirth.propTypes = {
  setDateOfBirth: PropTypes.func.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  dateOfBirthError: PropTypes.bool.isRequired,
  setDateOfBirthError: PropTypes.func.isRequired,

};

export default DateOfBirth;
