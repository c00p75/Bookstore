import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookStore from './components/BookStore';
import Categories from './components/bookCategories';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookStore />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
