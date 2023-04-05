import { useSelector } from 'react-redux';
import './bookStore.css';
import BookForm from './bookForm';
import BookList from './BookList';

const BookStore = () => {
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
