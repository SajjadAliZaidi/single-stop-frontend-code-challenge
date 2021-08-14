import React from 'react';
import { useSelector } from 'react-redux';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';

function App() {

  const state = useSelector((state) => state);

  return (
    <div className='app'>
      <h1>Comments {Object.keys(state.comments).length > 0 ? Object.keys(state.comments).length : ''}</h1>

      <CommentInput />
      <CommentList />
    </div>
  );
}

export default App;
