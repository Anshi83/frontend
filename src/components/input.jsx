import React from 'react';

const InputComponent = ({ label, placeholder, id ,type='text'}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
    />
    </div>
  );
};

export default InputComponent;

