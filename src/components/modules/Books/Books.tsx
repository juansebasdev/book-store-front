import React, { CSSProperties, useEffect, useState } from "react";
import BookService from "services/book/book.service";
import * as BookTypes from "types/book/book.types";

import "./Books.scss";
import { Link } from "react-router-dom";
import default_book from "assets/img/default-book.png";

interface IBooksProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const Books: React.FC<IBooksProps> = (props) => {
  const [books, setBooks] = useState<BookTypes.Book[]>([]);

  const bookService = new BookService();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const response = await bookService.getAll();
    if (response) {
      setBooks(response.data);
    }
  };

  let display;
  if (books.length > 0) {
    display = books.map((book: BookTypes.Book) => {
      let { id, image, name, price }: BookTypes.Book = book;

      return (
        <Link
          style={{ textDecoration: "none" }}
          key={id}
          to={`books/${id}`}
          className="col-lg-4 col-md-6 col-12 mb-4 mt-3 position-relative text-dark"
        >
          <div className="cards d-flex flex-column justify-content-center">
            <img
              src={image ? image : default_book}
              alt=""
              className="img img-fluid"
            />
            <div style={{ padding: "10px" }} className="content">
              <div className="title fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">{`$${price}.00`}</div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = <div className="mt-5">No se encuentran Libros</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Libros</h1>
      <div className="row"></div>
      <div className="row my-5">{display}</div>
    </div>
  );
};

export default Books;
