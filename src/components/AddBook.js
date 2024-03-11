import { useEffect, useState } from "react";
import Button from "./Button";
import Book from "./Book";

export default function AddBook({ collection, allBooks, onAddBook }) {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("");
  const [shownBooks, setShownBooks] = useState();
  const authors = [...new Set(allBooks.map((book) => book.author))].sort();
  const genres = [...new Set(allBooks.map((book) => book.genre))].sort();
  const range = ["Short", "Average", "Long"];

  function filterBooks() {
    const filteredBooks = allBooks.filter((book) => {
      const authorMatch = author === "" || book.author === author;
      const genreMatch = genre === "" || book.genre === genre;
      const lengthMatch =
        length === "" ||
        (length === "Short" && book.pages <= 200) ||
        (length === "Average" && book.pages > 200 && book.pages <= 400) ||
        (length === "Long" && book.pages > 400);

      return authorMatch && genreMatch && lengthMatch;
    });

    if (filteredBooks.length > 0) {
      setShownBooks(filteredBooks);
    } else {
      setShownBooks([]);
    }
  }

  function checkCollection(book) {
    return collection.some((b) => b.id === book.id);
  }

  useEffect(() => {
    if (author || genre || length) {
      filterBooks();
    }
  }, [author, genre, length]);

  function handleSubmit(e) {
    e.preventDefault();
    if (shownBooks) {
      setAuthor("");
      setGenre("");
      setLength("");
      setShownBooks();
    } else {
      filterBooks();
    }
  }

  return (
    <div className="block add">
      <h3>Add new book</h3>
      <form onSubmit={handleSubmit}>
        <div className="add__sort">
          <SelectElement value={author} setter={setAuthor} array={authors}>
            Author
          </SelectElement>
          <SelectElement value={genre} setter={setGenre} array={genres}>
            Genre
          </SelectElement>
          <SelectElement value={length} setter={setLength} array={range}>
            Length
          </SelectElement>
        </div>
        <Button>{shownBooks ? "Clear All" : "Show"}</Button>
        {<p></p>}
      </form>
      <ShownBooks />
    </div>
  );

  function SelectElement({ children, value, setter, array }) {
    return (
      <label>
        {children}
        <select value={value} onChange={(e) => setter(e.target.value)}>
          <option value="">All</option>
          {array.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function ShownBooks() {
    if (!shownBooks) {
      return null;
    }

    if (shownBooks.length > 0) {
      return (
        <div className="bookshelf">
          {shownBooks.map((book) => (
            <Book
              book={book}
              btnText={checkCollection(book) ? "in Collection" : "Add"}
              disabled={checkCollection(book) ? "disabled" : ""}
              key={book.id}
              onClick={() => onAddBook(book)}
            />
          ))}
        </div>
      );
    }

    return <p className="search-result">No books were found...</p>;
  }
}
