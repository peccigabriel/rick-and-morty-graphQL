import React from "react";

export const Button = ({ children, action, ...rest }) => {
  return (
    <button className="button" onClick={() => action()} {...rest}>
      {children}
    </button>
  );
};
