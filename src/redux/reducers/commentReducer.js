const INITIAL_STATE = JSON.parse(localStorage.getItem('comments-app-comments')) ?
  JSON.parse(localStorage.getItem('comments-app-comments')) : {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD": {
      const id = action.payload.id;
      const newComment = action.payload;
      const newState = { ...state, [id]: newComment };
      localStorage.setItem('comments-app-comments', JSON.stringify(newState))
      return newState;
    }
    case "DELETE": {
      const newState = { ...state };
      delete newState[action.payload.id];
      localStorage.setItem('comments-app-comments', JSON.stringify(newState))
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;