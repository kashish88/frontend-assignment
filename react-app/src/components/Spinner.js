import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner"
      role="status"
      aria-live="polite"
      aria-label="Loading, please wait"
    >
      <span className="visually-hidden">Loading, please wait...</span>
    </div>
  );
};

export default Spinner;
