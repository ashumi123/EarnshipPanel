import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";

const InputField = (props) => {
  const classes = useStyles();

  const {
    id,
    error,
    helperText,
    placeholder,
    name,
    onBlur,
    onChange,
    type,
    value,
    className,
    maxLength,
    autoComplete,
    disabled,
    multiline,
    my,
    textArea,
  } = props;
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      error={error}
      noValidate
      helperText={helperText}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      type={type}
      value={value}
      fullWidth
      // classes={{root:classes.my}}
      className={clsx([classes.input, my && classes.my])}
      multiline={(textArea || multiline) && true}
      rows={textArea && 7}
      autoComplete={autoComplete ? autoComplete : ""}
      disabled={disabled}
      inputProps={{ maxLength: maxLength && maxLength }}
    />
  );
};

export default InputField;
