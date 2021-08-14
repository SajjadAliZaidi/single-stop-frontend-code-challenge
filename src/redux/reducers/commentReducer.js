const INITIAL_STATE = {
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD": {
      const id = action.payload.comment.id;
      const newComment = action.payload.comment;
      return {
        ...state,
        [id]: newComment
      };
    }
    case "DELETE": {
      const newState = { ...state };
      delete newState[action.payload.id];
      return {
        ...newState
      };
    }
    default:
      return state;
  }
}

export default reducer;