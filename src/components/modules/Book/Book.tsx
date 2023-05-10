import { CSSProperties, useEffect, useState } from "react";
import default_book from "assets/img/default-book.png";
import { useParams } from "react-router-dom";
import BookService from "services/book/book.service";
import * as BookTypes from "types/book/book.types";

import "./Book.scss";

interface IBookProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const Book: React.FC<IBookProps> = (props) => {
  const { id } = useParams();
  const [book, setBook] = useState<BookTypes.Book>();
  const bookService = new BookService();

  useEffect(() => {
    getMovie(id);
  }, []);

  const getMovie = async (id: any) => {
    const response = await bookService.getSingleBook(id);
    if (response) {
      setBook(response.data);
    }
  };

  let display;
  if (book) {
    const {
      name,
      image,
      author,
      description,
      countInStock,
      price,
    }: BookTypes.Book = book;

    display = (
      <div className="container d-flex justify-content-center mb-5">
        <div className="d-flex flex-column gap-3">
          <h1 className="title text-center">{name}</h1>
          <div className="text-center">
            <img
              style={{ width: "50%" }}
              src={image ? image : default_book}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="content">
            <div className="description fs-5" style={{ textAlign: "justify" }}>
              {description}
            </div>
            <div>
              <span className="fw-bold fs-4">Autor: {author}</span>
              <div className="date fs-5">{`$${price}.00`}</div>
              <div className="date fs-5">{`Unidades disponibles: ${countInStock}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    display = <div>Información no disponible</div>;
  }

  return <>{display}</>;
};

export default Book;
