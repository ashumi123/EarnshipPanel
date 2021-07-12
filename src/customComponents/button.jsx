import React from "react";
import clsx from "clsx";
// antd
import { Button as AntButton } from "antd";
// Styles
import { useStyles } from "./styles";

const Button = (props) => {
  // Hooks declarations
  const classes = useStyles();
  // Props destructuring
  const { onClick, type, title, mr, mb, grey, disabled, size, width,backgroundColor } = props;

  return (
    <AntButton
      disabled={disabled}
      htmlType={type}
      type="primary"
      size="large"
      style={{ height: size ? size : 38, width: width ? width : "auto",backgroundColor:backgroundColor?backgroundColor:null }}
      className={clsx(classes.button, [
        mr && classes.mr,
        mb && classes.mb,
        grey && classes.grey,
        
      ])}
      onClick={onClick}
    >
      {title}
    </AntButton>
  );
};

export default Button;
