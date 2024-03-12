import Book from "./Book";

export default function Bookshelf({
  collection,
  onSelection,
  selectedBook,
  onMarkAsRead,
}) {
  return (
    <div className="block">
      <h2>Bookshelf</h2>
      <ul className="bookshelf">
        {collection.map((book) => (
          <Book
            book={book}
            selectedBook={selectedBook}
            onSelection={onSelection}
            key={book.imageLink}
            btnText={book.read ? "Unmark" : "Mark as read"}
            onClick={() => onMarkAsRead(book)}
            className={book.read ? "read" : ""}
          />
        ))}
      </ul>
    </div>
  );
}
