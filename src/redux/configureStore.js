import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/books';
import { checkStatusReducer } from './categories/categories';

const store = configureStore({ reducer: { books: booksReducer, status: checkStatusReducer } });

export default store;
