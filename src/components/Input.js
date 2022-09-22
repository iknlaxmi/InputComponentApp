import React, { useEffect, useState } from 'react';
import '../styles/Input.css';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { StrikethroughSTwoTone } from '@mui/icons-material';

function Input({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullwidth,
  multiline,
  row,
}) {
  const [cname, setCname] = useState();
  const [text, setText] = useState('<Input />');
  const [ipClass, setIpClass] = useState();
  const [lclass, setLclass] = useState();
  const [textData, setTextData] = useState('');
  const [pclass, setPclass] = useState();
  const [sIcon, setStartIcon] = useState();
  const [eIcon, setEndIcon] = useState();
  const [iconFlag, setIconFlag] = useState(false);
  const [startIconProp, setStartIconProp] = useState(false);
  const [endIconProp, setEndIconProp] = useState(false);
  const [valText, setValText] = useState('');
  const [sizeData, setSizeData] = useState();
  const [numRows, setRows] = useState();
  const [textareaFlag, setTextarea] = useState(false);

  useEffect(() => {
    if (helperText && error) {
      setTextData('Some interesting text');
      setText('<Input helperText="Some interesting text" error />');
      setIpClass('errorHelperText');
      setLclass('lerrorHelperText');
      setPclass('perrorHelperText');
    } else if (helperText) {
      setTextData('Some interesting text');
      setText('<Input helperText="Some interesting text" />');
    } else if (error) {
      setText('<Input error />');
      setIpClass('error');
      setLclass('lerror');
    } else if (disabled) {
      setText('<Input disabled />');
      setIpClass('disabled');
      setLclass('ldisabled');
    } else if (startIcon) {
      setText('<Input startIcon />');
      setStartIcon(<CallIcon />);
      setIconFlag(true);
      setStartIconProp(true);
      setLclass('normalLabel');
    } else if (endIcon) {
      setText('<Input endIcon />');
      setEndIcon(<LockIcon />);
      setIconFlag(true);
      setEndIconProp(true);
      setLclass('normalLabel');
    } else if (value) {
      setValText(value);
    } else if (size) {
      setText('<Input size= ' + "'" + `${size}` + "'" + ' />');
      setIpClass(size);
    } else if (fullwidth) {
      setText('<Input fullwidth />');
      setIpClass('fullwidth');
    } else if (multiline && row) {
      setText('<Input multiline row=' + "'" + `${row}` + "'" + ' />');
      setIpClass('multiline');
      setRows(row);
      setTextarea(true);
      setLclass('normalLabel');
    } else {
      setIpClass('plain');
      setLclass('lplain');
    }
  }, [
    error,
    disabled,
    helperText,
    startIcon,
    endIcon,
    value,
    size,
    fullwidth,
    multiline,
    row,
  ]);
  return (
    <div>
      <div>
        <h5>{text}</h5>
      </div>
      {iconFlag === false && (
        <div className="main input-group">
          <p className={pclass}>{textData}</p>
          {textareaFlag === false && (
            <input
              className={ipClass}
              type="text"
              placeholder="placeholder"
              value={valText}
            />
          )}
          {textareaFlag && (
            <textarea rows={numRows} placeholder="placeholder"></textarea>
          )}
          <label className={lclass}>Label</label>
        </div>
      )}
      {iconFlag && (
        <div className="main input-group">
          <TextField
            id="input-with-icon-textfield"
            sx={{
              '& label': {
                marginLeft: '15%',
                '&.Mui-focused': {
                  marginLeft: 0,
                },
              },
            }}
            label="placeholder"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            InputProps={{
              startAdornment: startIconProp && (
                <InputAdornment position="start">{sIcon}</InputAdornment>
              ),
              endAdornment: endIconProp && (
                <InputAdornment position="end">{eIcon}</InputAdornment>
              ),
            }}
          />

          <label className={lclass}>Label</label>
        </div>
      )}
    </div>
  );
}

export default Input;
