import Book from "./Book";

export default function Bookshelf({ collection, onOpenInfo }) {
  return (
    <div className="block">
      <h2>Bookshelf</h2>
      <ul className="bookshelf">
        {collection.map((book) => (
          <Book
            book={book}
            key={book.imageLink}
            onClick={onOpenInfo}
            btnText="Details"
          />
        ))}
      </ul>
    </div>
  );
}
