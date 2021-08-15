import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/action-creators/index';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 0.5rem;
`;

const CommentBodyContainer = styled.div`
  display: flex;
  padding-left: 1rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommentText = styled.p`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;      /* CSS3 */   
`;

const DeleteButton = styled.button`
  height: 1.5rem;
  font-size: 1rem;
  width: 5rem;
`;

const CommentList = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { deleteComment } = bindActionCreators(actionCreators, dispatch);

  return (
    <React.Fragment>
      {Object.keys(state.comments).map(function renderComment(key) {
        return (
          <CommentContainer key={state.comments[key].id}>
            <p>{state.comments[key].email}:</p>
            <CommentBodyContainer>
              <CommentText>{state.comments[key].body}</CommentText>
              <DeleteButton
                onClick={() => deleteComment({ id: state.comments[key].id })}
              >Delete</DeleteButton>
            </CommentBodyContainer>
            <p className="gray-text">{state.comments[key].date} at {state.comments[key].time}</p>
          </CommentContainer>
        );
      })}
    </React.Fragment>
  );
}

export default CommentList;