import { useDispatch, useSelector } from 'react-redux';
import './bookStore.css';
import { useEffect } from 'react';
import BookForm from './bookForm';
import BookList from './BookList';
import { fetchBooks } from '../redux/books/books';

const BookStore = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBooks()); }, [dispatch]);
  const books = useSelector((state) => state.books);

  return (
    <div className="container bookListContainer padding">
      <BookList
        className="bookList"
        books={books}
      />
      <BookForm />
    </div>
  );
};

export default BookStore;
