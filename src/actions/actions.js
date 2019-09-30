export const getItem = _id => dispatch => {
  dispatch({ type: "GET_ITEM", payload: _id });
};
