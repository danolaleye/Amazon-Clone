export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { state };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      return { state };
    default:
      return state;
  }
}

export default reducer;
