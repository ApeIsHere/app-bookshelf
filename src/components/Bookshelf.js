import Book from "./Book";

export default function Bookshelf({ books }) {
  return (
    <ul className="block bookshelf">
      {books.map((book) => (
        <Book book={book} key={book.imageLink} />
      ))}
    </ul>
  );
}
