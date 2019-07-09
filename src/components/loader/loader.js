import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-ellipsis">
        <div className="lds-ellipsis-element" />
        <div className="lds-ellipsis-element" />
        <div className="lds-ellipsis-element" />
        <div className="lds-ellipsis-element" />
      </div>
      <div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
