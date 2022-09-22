import React from 'react';
import Input from './Input';
import '../styles/InputSelect.css';

function InputSelect() {
  return (
    <div>
      <Input />
      <Input error />
      <Input disabled />
      <div className="container">
        <Input helperText="Some interesting text" />
        <Input helperText="Some interesting text" error />
      </div>
      <div className="container">
        <Input startIcon />
        <Input endIcon />
      </div>
      <Input value="Text" />
      <div className="container">
        <Input size="sm" />
        <Input size="md" />
      </div>
      <Input fullwidth />
      <Input multiline row="4" />
    </div>
  );
}

export default InputSelect;
