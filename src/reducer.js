export const initialState = {
  basket: [],
};

// Selector to calculate subtotal
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const userName = (userfinal) => {
  let final = userfinal.split(".")[0];
  return final;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        // removes particular element from basket
        newBasket.splice(index, 1);
      } else {
        console.warn("nothing here");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
