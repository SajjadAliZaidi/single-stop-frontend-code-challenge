import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/action-creators/index';
import styled from 'styled-components';
import { commentFactory } from '../utils/comments';

const InputContainer = styled.div``;

const CommentInput = () => {

  const [email, setEmail] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [error, setError] = useState('');

  const state = useSelector((state) => state);
  console.log({ state });
  const dispatch = useDispatch();

  const { addComment } = bindActionCreators(actionCreators, dispatch);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handleCommentInput = (e) => {
    setCommentBody(e.target.value);
  }

  const handleCommentSubmit = (e) => {
    if (email === '') {
      setError('Email is required');
    } else {
      console.log('submit');
      addComment(commentFactory({ email, body: commentBody }));
      setEmail('');
      setCommentBody('');
      setError('');
    }
  }

  return (
    <React.Fragment>
      <InputContainer>
        <label htmlFor="commentEmailInput">Email: </label>
        <input
          id="commentEmailInput"
          type="email"
          value={email}
          onChange={handleEmailInput}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="commentBodyInput">Comment: </label>
        <input
          id="commentBodyInput"
          type="text"
          value={commentBody}
          onChange={handleCommentInput}
        />
      </InputContainer>
      <button
        onClick={handleCommentSubmit}
        disabled={commentBody === ''}
      >Add Comment
      </button>
      <p style={{ color: 'red' }}>{error}</p>
    </React.Fragment>
  );
}

export default CommentInput;