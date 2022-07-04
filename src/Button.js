import React from "react";

export const Button = ({ children, ...rest }) => {
  return (
    <button className="button bg-green-400" {...rest}>
      {children}
    </button>
  );
};
