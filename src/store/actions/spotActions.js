export const createSpot = (spot) => {
  return (dispatch, getState) => {
    
    dispatch({ type: "CREATE_SPOT", spot });
  };
};
