import { useState, createContext } from 'react';
import './App.css';

import ComponentA from './components/ComponentA';

export const DataContext = createContext();

console.log(DataContext);

function App() {
  const [userName, setUserName] = useState('Madeline');
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <DataContext.Provider value={{userName, setLoggedIn}}>
      <h1>Learning React Context</h1>
      <h2>Hello: </h2>
      {loggedIn ? "Logged In" : "Logged Out"}
      <ComponentA />
    </DataContext.Provider>
  );
}

export default App;
