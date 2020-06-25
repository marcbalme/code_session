import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputDatePicker = ({ label, date, setDate }) => {
  return (
    <div className="form-datepicker">
      <div className="form-label">{label}</div>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(date) => setDate(date)}
        showYearDropdown
        dropdownMode="select"
        showMonthDropdown
        useShortMonthInDropdown
      />
    </div>
  );
};
export default InputDatePicker;
