import { getAllBooks } from "../lib/data";
import BookList from "../ui/books/BookList";

const BookListPage = () => {
  const books = getAllBooks();
  return (
    <div className=" m-5  flex flex-grow  ">
      <div className=" grid md:grid-cols-4 lg:grid-cols-4  grid-cols-3 gap-4 md:gap-2 lg:gap-4 xl:gap-6    ">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default BookListPage;
