import { createStore } from "redux";
import { TypeState } from "../../types/globals";

const initialStateBeers: TypeState = {
  beers: [],
  authorizedUser: null,
};

const reduser = function (state: TypeState = initialStateBeers, action: any) {
  switch (action.type) {
    case "ACTION_SET_BEER": {
      return {
        ...state,
        beers: action.payload,
      };
    }
    case "ACTION_SET_USER": {
      return {
        ...state,
        authorizedUser: action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reduser);

store.subscribe(function () {
  console.log(store.getState());
});

export default store;
