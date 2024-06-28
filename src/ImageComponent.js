// ImageComponent.js
import React from "react";

const ImageComponent = ({ src }) => {
  return (
    <img src={src} alt="carousel" style={{ width: "800px", height: "400px" }} />
  );
};

export default ImageComponent;
