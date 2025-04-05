import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './UserContext';
import Component1 from './Component1'; 
import Component5 from './Component5';  

const App = () => {
  // const user = 'React'

  const user = {
    name: 'React',
    theme: 'dark',
    language: 'JavaScript',
  };
  
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/page2" element={<Component5 />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
