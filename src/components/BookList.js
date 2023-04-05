import { PropTypes } from 'prop-types';
import Book from './Book';
import './bookStore.css';

const BookList = ({ books }) => (
  <>
    <ul className="container allBooks">
      {
          books.map((item) => (
            <Book
              key={item.item_id}
              bookDetails={item}
            />
          ))
          }
    </ul>
    <div className="hr"> </div>
  </>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
