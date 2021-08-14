import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './redux/action-creators/index';

function App() {

  let id_ = 0;

  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const { addComment, deleteComment } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='app'>
      <h1>Comments</h1>
      <button onClick={() => addComment({
        comment: {
          email: "s@gmail.com",
          body: "hello",
          date: new Date(),
          id: id_++
        }
      })}>Add</button>
      <button onClick={() => deleteComment({
        id: 0
      })}>
        Delete
      </button>
    </div>
  );
}

export default App;
