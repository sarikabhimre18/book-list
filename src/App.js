import React from 'react';

import BookContextProvder from './context/BookContext';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvder>
        <Navbar/>
        <BookList />
        <NewBookForm />
      </BookContextProvder>
    </div>
  );
}

export default App;
