const initState = {
  spots: [],
};

const spotReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SPOT":
      return state;
    case "CREATE_SPOT_ERROR":
      console.log("create spot ettor", action.err);
      return state;
    default:
      return state;
  }
};

export default spotReducer;
