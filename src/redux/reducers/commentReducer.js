const INITIAL_STATE = {
  comments: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return {
        comments: [...state.comments, action.payload]
      };
    case "DELETE":
      return {
        comments: state.comments.filter(comment => {
          return comment.id !== action.payload
        })
      };
    default:
      return state;
  }
}

export default reducer;