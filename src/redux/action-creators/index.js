export const addComment = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload
    });
  }
}

export const deleteComment = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload
    });
  }
}