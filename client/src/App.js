import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer'
import SelectDate from "./components/logic/SelectDate"



function App() {
  return (
    <div id="mainContainer">
    <Header />
    <SelectDate />
    <Footer />
    </div>
  );
}

export default App;
