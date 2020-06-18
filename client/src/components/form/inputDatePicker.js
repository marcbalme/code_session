import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputDatePicker = ({ label, date, setDate }) => {
  return (
    <div>
      <div className="form-label">{label}</div>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};
export default InputDatePicker;
