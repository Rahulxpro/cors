// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ImageCarousel from "./ImageCarousel";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Image Carousel</h1>
        <ImageCarousel />
      </div>
    </Provider>
  );
};

export default App;
