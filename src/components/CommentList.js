import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/action-creators/index';

const CommentContainer = styled.div``;

const CommentList = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { deleteComment } = bindActionCreators(actionCreators, dispatch);

  return (
    <React.Fragment>
      {Object.keys(state.comments).map(function renderComment(key) {
        return (
          <CommentContainer key={state.comments[key].id}>
            <p>{state.comments[key].email}</p>
            <p>{state.comments[key].body}</p>
            <p>{state.comments[key].date} at {state.comments[key].time}</p>
            <button
              onClick={() => deleteComment({ id: state.comments[key].id })}
            >Delete</button>
          </CommentContainer>
        );
      })}
    </React.Fragment>
  );
}

export default CommentList;