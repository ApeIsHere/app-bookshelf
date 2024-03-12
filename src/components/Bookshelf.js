import { useEffect, useState } from "react";
import Book from "./Book";
import SortingElement from "./SortingElement";

export default function Bookshelf({
  collection,
  onSelection,
  selectedBook,
  onMarkAsRead,
}) {
  const [sortBy, setSortBy] = useState("");
  const sortArray = ["Recent", "Read", "Title", "Length"];

  let sortedCollection;

  if (sortBy === "") {
    sortedCollection = collection;
  }
  if (sortBy === "Recent") {
    sortedCollection = collection.slice().reverse();
  }
  if (sortBy === "Read") {
    sortedCollection = collection
      .slice()
      .sort((a, b) => Number(a.read) - Number(b.read));
  }
  if (sortBy === "Title") {
    sortedCollection = collection
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortBy === "Length") {
    sortedCollection = collection.slice().sort((a, b) => a.pages - b.pages);
  }

  return (
    <div className="block">
      <h2>Bookshelf</h2>
      <div className="sort-by">
        <SortingElement
          value={sortBy}
          setter={setSortBy}
          array={sortArray}
          def={"default"}
        >
          Sort by
        </SortingElement>
      </div>
      <ul className="bookshelf">
        {sortedCollection.map((book) => (
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
