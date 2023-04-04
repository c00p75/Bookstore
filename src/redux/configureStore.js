import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/books';
import { checkStatusReducer } from './categories/categories';

const rootReducer = combineReducers({ books: booksReducer, status: checkStatusReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
