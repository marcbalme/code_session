import React from 'react';
import Select from 'react-select';

const InputSelect = ({ label, options, value, setValue }) => {
  return (
    <div>
      <div className="form-label">{label}</div>
      <Select options={options} onChange={(e) => setValue(e.value)} />
    </div>
  );
};
export default InputSelect;
