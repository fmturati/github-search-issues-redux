import React from "react";
import "./label.css";

const Label = props => {
  const { id, name } = props;
  return (
    <p className="issue-label" key={id}>
      <span className="issue-label-circle" />
      {name}
    </p>
  );
};

export default Label;
