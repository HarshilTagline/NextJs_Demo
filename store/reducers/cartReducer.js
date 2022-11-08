const initialState = {
  sample: "",
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SAMPLE":
      console.log("action", action);
      return {
        ...state,
        sample: action.payload,
      };

    default:
      return state;
  }
};

export default sampleReducer;
