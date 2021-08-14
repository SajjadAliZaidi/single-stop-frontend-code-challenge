import React from 'react';
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className='app'>
      <h1>Comments</h1>
    </div>
  );
}

export default App;
