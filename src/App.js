import React, { useEffect, useState } from 'react';
import { Main } from './components/Layouts/Main/Main';
import './App.css';
import { Header } from './components/Layouts/Header/Header';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* Pruebas Dos en la rama  */}
    </div>
  )
}

export default App;
