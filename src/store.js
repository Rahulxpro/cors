// store.js
import { createStore } from "redux";

// Actions
const NEXT_IMAGE = "NEXT_IMAGE";
const PREVIOUS_IMAGE = "PREVIOUS_IMAGE";

// Action Creators
export const nextImage = () => ({ type: NEXT_IMAGE });
export const previousImage = () => ({ type: PREVIOUS_IMAGE });

// Initial State
const initialState = {
  currentIndex: 0,
  images: [
    "https://eu-images.contentstack.com/v3/assets/bltbebdf496526c3cfd/bltf13bb45574594620/656d7daba223a2040af16d96/GettyImages-588932275.jpg",
    "https://xx.bstatic.com/xdata/images/xphoto/1182x887/292260438.jpg?k=e3972dd458ec7aba4d1589e0ab407c7923f526057a62ae4ed97ba6844123ad6e&o=?size=M",
    "https://xx.bstatic.com/xdata/images/xphoto/1182x887/292260716.jpg?k=615e50531691574874abfdc86b84fde86afdefc02a8e336382d161567a3e5d75&o=?size=M",
    "https://xx.bstatic.com/xdata/images/xphoto/1182x887/292260536.jpg?k=f93b8b08e6243424cc223443d4c72f73bc854f7583b19f4126e1810f2e630509&o=?size=M",
    "https://xx.bstatic.com/xdata/images/xphoto/1182x887/292260565.jpg?k=84056f87527039e1a057274fa8ac693e7ab9f9cb6b7977809408c99130ca70a1&o=?size=M",
  ],
};

// Reducer
const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREVIOUS_IMAGE:
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(carouselReducer);

export default store;
