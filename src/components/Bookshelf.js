import Book from "./Book";

export default function Bookshelf({ books, onOpenInfo }) {
  return (
    <div className="block">
      <h2>Bookshelf</h2>
      <ul className="bookshelf">
        {books.map((book) => (
          <Book
            book={book}
            key={book.imageLink}
            onOpenInfo={onOpenInfo}
            btnText="Details"
          />
        ))}
      </ul>
    </div>
  );
}
