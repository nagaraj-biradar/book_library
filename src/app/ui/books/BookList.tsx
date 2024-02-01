import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }: any) => {
  return (
    <>
      {books.map((book: any) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </>
  );
};

export default BookList;
