import { PropTypes } from 'prop-types';
import './bookStore.css';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const Book = ({ bookDetails }) => {
  const dispatch = useDispatch();

  const userAppData = {
    progress: '0',
    chapter: 'Introduction',
  };

  return (
    <li className="container d-flex justify-between align-items-center">
      <div className="details d-flex flex-column">
        <span className="bookCategory">{bookDetails.category}</span>
        <span className="bookTitle">{bookDetails.title}</span>
        <span className="bookAuthor">{bookDetails.author}</span>
        <div className="d-flex justify-between mt-2">
          <button type="button" className="bookBtn">Comment</button>
          <span className="divider">|</span>
          <button type="button" className="bookBtn px-2" onClick={() => dispatch(removeBooks(bookDetails.item_id))}>Remove</button>
          <span className="divider">|</span>
          <button type="button" className="bookBtn px-2">Edit</button>
        </div>
      </div>
      <div className="bookProgress d-flex justify-content-end align-items-center px-2">
        <div className="progress-container">
          <div className="progress"> </div>
        </div>
        <div style={{ fontSize: '2rem' }} className="d-flex flex-column">
          <span>
            {userAppData.progress}
            %
          </span>
          <span style={{ fontSize: '0.875rem', opacity: '0.5' }}>Completed</span>
        </div>
      </div>
      <div className="largeDivider"> </div>
      <div className="d-flex flex-column">
        <span style={{ fontSize: '0.813rem', opacity: '0.5' }}>CURRENT CHAPTER</span>
        <span className="bookChapter">{userAppData.chapter}</span>
        <button type="button" className="updateBtn mt-3">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookDetails: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
