import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const url = "https://dummyjson.com/products/search?q=";
  ///reducer
  const initialState = {
    id: null,
    searchChar: "a",
    price: [],
    products: [],
    product: {},
    cart: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "SET_WORD":
        return {
          ...state,
          searchChar: action.payload,
        };
      case "SET_ID":
        return {
          ...state,
          id: action.payload,
        };
      case "SET_PRODUCT":
        return {
          ...state,
          product: state.products.filter((product) => product.id === state.id),
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((list) => list.id !== action.payload),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //datafetch

  const fetchData = useCallback(async () => {
    try {
      const data = await axios.get(`${url}${state.searchChar}`);
      dispatch({ type: "ADD_PRODUCTS", payload: data.data.products });
    } catch (error) {
      console.log(error.message);
    }
  }, [state.searchChar]);

  useEffect(() => {
    fetchData();
  }, [state.searchChar, fetchData]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};
