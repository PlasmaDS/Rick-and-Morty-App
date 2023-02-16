import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
} from "../actions/types.js";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered,
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filterGender = filterCopy.filter((fav) => fav.gender === payload);
      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER:
      const orderCopy = [...state.allCharacters];
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendant" ? 1 : -1;
        }
        if (a.id < b.id) {
          return payload === "Ascendant" ? -1 : 1;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        myFavorites: order,
      };

    default:
      return state;
  }
}
