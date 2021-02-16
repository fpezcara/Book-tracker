import React, { useContext } from "react";
import { ModalContainer, ModalText, ModalButton } from "../../styles/Modal";
import { useHistory, useParams } from "react-router-dom";
import { BookTrackerContext } from "../Context/BookTrackerContext";

const ConfirmationModal = ({ book, title, authors, setOpenModal }) => {
  const history = useHistory();
  const params = useParams();
  const [bookLists, setBookLists] = useContext(BookTrackerContext);

  const addButtonlHandler = (e) => {
    // console.log(params);
    history.push(`/book-lists/${params.name}`);
    setOpenModal(false);

    setBookLists(
      [...bookLists],
      bookLists.filter(
        (list) => list.listUrl === params.name && list.books.push(book)
      )
    );
  };
  const cancelButtonHandler = (e) => {
    setOpenModal(false);
    history.push(`/book-lists/${params.name}`);
  };

  return (
    <ModalContainer>
      <article>
        <ModalText>
          <span className="message"> Do you want to add:</span>
          <span className="title"> {title}?</span>
          <span className="author">by {authors}</span>
          {/* arreglar authors para si son mas de una */}
        </ModalText>
        <ModalButton>
          <button
            onClick={addButtonlHandler}
            className="button add"
            type="submit"
          >
            Add
          </button>
          <button
            onClick={cancelButtonHandler}
            className="button cancel"
            type="submit"
          >
            Cancel
          </button>
        </ModalButton>
      </article>
    </ModalContainer>
  );
};

export default ConfirmationModal;
