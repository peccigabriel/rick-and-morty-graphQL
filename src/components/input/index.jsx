import React from "react";

export const Input = ({ type = "text", value, setValue, ...rest }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};
