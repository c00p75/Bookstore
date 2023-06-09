import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G55BGctcj4i26M6d6pQC';

// Initializing constatnt action variables
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`: // fulfilled is a default action of thunk sent if funcion call succeeds. Others include pending and rejected.
      return action.payload; // Using payload(result) after executing thunk as state.
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return [...state.filter((book) => book.item_id.toString() !== action.payload.toString())];

    default:
      return state;
  }
};

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS, async () => {
    let books; // Declaring variable to later store fetched data
    await axios.get(`${baseURL}/books`)
      .then((response) => {
        books = Object.keys(response.data).map((book) => ({
          item_id: book,
          ...response.data[book][0],
        }));
      })
      .catch(() => 'error');
    return books;
  },
);

// Reducer actions
export const addBook = createAsyncThunk(
  ADD_BOOK, async (book) => {
    await axios({
      method: 'post',
      url: `${baseURL}/books`,
      data: book,
    });
    return book;
  },
);

export const removeBooks = createAsyncThunk(
  REMOVE_BOOK, async (bookId) => {
    await axios({
      method: 'DELETE',
      url: `${baseURL}/books/${bookId}`,
    });
    return bookId;
  },
);
