import React, { createContext, useReducer } from "react";

const CartContext = createContext({});

type CartState = {
  items: Array<any>;
  totalAmount: number;
};

type CartActions = {
  type: "ADD" | "REMOVE" | "REDUCE";
  payload: { item: any };
};

function reducerCart(state: CartState, action: CartActions) {
  const existingItemIndex = state.items.findIndex(
    (item: { _id: any }) => item._id === action.payload.item._id
  );
  const existingItem = state.items[existingItemIndex];

  let updatedItems: any[];

  if (action.type === "ADD") {
    updatedItems = [];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const updatedItem = {
        ...action.payload.item,
        quantity: 1,
      };

      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.payload.item.price,
    };
  } else if (action.type === "REDUCE") {
    updatedItems = [];

    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter(
          (item: { _id: any }) => item._id !== action.payload.item._id
        );
      }
    }

    return {
      items: [...updatedItems],
      totalAmount: state.totalAmount - action.payload.item.price,
    };
  } else if (action.type === "REMOVE") {
    updatedItems = state.items.filter(
      (item: { _id: any }) => item._id !== action.payload.item._id
    );
    return {
      items: updatedItems,
      totalAmount:
        state.totalAmount -
        action.payload.item.price * action.payload.item.quantity,
    };
  } else {
    return state;
  }
}

export const CartProvider = ({ children }: any) => {
  const [cartState, dispatchCart] = useReducer(reducerCart, {
    items: [],
    totalAmount: 0,
  });

  const addItem = (product: any) => {
    dispatchCart({ type: "ADD", payload: { item: product } });
  };

  const removeItem = (product: any) => {
    dispatchCart({ type: "REMOVE", payload: { item: product } });
  };
  const reduceItem = (product: any) => {
    dispatchCart({ type: "REDUCE", payload: { item: product } });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addItem,
        removeItem,
        reduceItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
