import { createContext, useContext, useReducer, useEffect } from "react";

const GlobalContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], 
};

const reducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, count } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, count: item.count + count } : item
        );
      } else {
        updatedCart = [...state.cart, { id, count }];
      }
      break;
    }

    case "REMOVE_FROM_CART":
      updatedCart = state.cart.filter((item) => item.id !== action.payload);
      break;

    case "INCREMENT":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
      break;

    case "DECREMENT":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
      break;

    default:
      return state;
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  return { ...state, cart: updatedCart };
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart)); 
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
