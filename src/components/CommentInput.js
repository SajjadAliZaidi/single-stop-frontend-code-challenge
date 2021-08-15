import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/action-creators/index';
import styled from 'styled-components';
import { commentFactory } from '../utils/comments';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const InputLabel = styled.label`
  width: 15%;
  display: flex;
  flex-direction: flex-start;
`;

const InputItem = styled.input`
  width: 85%;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 0.3rem;
`;


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
      setError('Email address is required!');
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
        <InputLabel htmlFor="commentEmailInput">
          Email:
        </InputLabel>
        <InputItem
          id="commentEmailInput"
          type="email"
          value={email}
          onChange={handleEmailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="commentBodyInput">
          Comment:
        </InputLabel>
        <InputItem
          id="commentBodyInput"
          type="text"
          value={commentBody}
          onChange={handleCommentInput}
        />
      </InputContainer>
      <Button
        onClick={handleCommentSubmit}
        disabled={commentBody === ''}
      >Add Comment
      </Button>
      <p className="error-text">{error}</p>
    </React.Fragment>
  );
}

export default CommentInput;