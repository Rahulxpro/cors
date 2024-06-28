// ImageCarousel.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextImage, previousImage } from "./store";
import ImageComponent from "./ImageComponent";
import NavigationComponent from "./NavigationComponent";

const ImageCarousel = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  return (
    <div>
      <ImageComponent src={images[currentIndex]} />
      <NavigationComponent
        onPrevious={() => dispatch(previousImage())}
        onNext={() => dispatch(nextImage())}
      />
    </div>
  );
};

export default ImageCarousel;
