import React from "react";
import { getBookById } from "../../lib/data";
const BookDetailsPage = ({ params: { id } }: any) => {
  const bookDetails = getBookById(id);

  return <div>{bookDetails?.title}</div>;
};

export default BookDetailsPage;
