import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import "./App.css";

function App() {
  return (
    <div className="appwidth">
      <Header />
      <div className="row abcard">
        <Card name="Experiment" cardcolor="gradient-1" />
        <Card name="Anaysis" cardcolor="gradient-2" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
