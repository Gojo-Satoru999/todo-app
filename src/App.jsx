import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;