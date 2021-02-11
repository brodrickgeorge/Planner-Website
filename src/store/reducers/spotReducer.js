const initState = {
  spots: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
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
