// NavigationComponent.js
import React from "react";

const NavigationComponent = ({ onPrevious, onNext }) => {
  return (
    <div>
      <button onClick={onPrevious}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default NavigationComponent;
