import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid mt-3">
        <Card />
      </div>
    </div>
  );
}

export default App;
