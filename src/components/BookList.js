import Book from './Book';
import './bookStore.css';

const BookList = (props) => {
  const property = props;
  const book = property.bookDetails;
  return (
    <>
      <ul className="container allBooks">
        {
          book.map((item) => (
            <Book
              key={item.id}
              book={item}
            />
          ))
          }
      </ul>
      <div className="hr"> </div>
    </>
  );
};

export default BookList;
