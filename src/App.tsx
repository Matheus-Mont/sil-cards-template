import React, { useEffect } from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import './services/miragejs';
import CardsTemplate from './pages/CardsTemplate';

function App() {
  return (
    <div>
      <CardsTemplate />
    </div>
  );
}

export default App;
