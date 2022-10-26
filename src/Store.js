import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  electronics: {
    electronicsItems: [],
  },
  jewellery: {
    jewelleryItems: [],
  },
  mensclothes: {
    mensclothesItems: [],
  },
  womensclothes: {
    womensclothesItems: [],
  },
};

// for add, delete ... to cart or wish
function reducer(state, action) {
  switch (action.type) {
    //for cart or bag
    case "ADD_TO_ELECTRONICSCART": {
      const newItem = action.payload;

      const electronicsItems = [...state.electronics.electronicsItems, newItem];

      return {
        ...state,
        electronics: { ...state.electronics, electronicsItems },
      };
    }
    case "ADD_TO_JEWELLERYCART": {
      const newItem = action.payload;

      const jewelleryItems = [...state.jewellery.jewelleryItems, newItem];

      return { ...state, jewellery: { ...state.jewellery, jewelleryItems } };
    }
    case "ADD_TO_MENSCLOTHESCART": {
      const newItem = action.payload;

      const mensclothesItems = [...state.mensclothes.mensclothesItems, newItem];

      return {
        ...state,
        mensclothes: { ...state.mensclothes, mensclothesItems },
      };
    }
    case "ADD_TO_WOMENSCLOTHESCART": {
      const newItem = action.payload;

      const womensclothesItems = [
        ...state.womensclothes.womensclothesItems,
        newItem,
      ];

      return {
        ...state,
        womensclothes: { ...state.womensclothes, womensclothesItems },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
