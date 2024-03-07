import { useState } from "react";
import Button from "./Button";
import Book from "./Book";

export default function AddBook({ books }) {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("");
  const [shownBooks, setShownBooks] = useState([]);
  const authors = [...new Set(books.map((book) => book.author))];
  const genres = [...new Set(books.map((book) => book.genre))];

  function handleSubmit(e) {
    e.preventDefault();

    const filteredBooks = books.filter((book) => {
      const authorMatch = author === "" || book.author === author;
      const genreMatch = genre === "" || book.genre === genre;
      const lengthMatch =
        length === "" ||
        (length === "short" && book.pages <= 200) ||
        (length === "average" && book.pages > 200 && book.pages <= 400) ||
        (length === "long" && book.pages > 400);

      return authorMatch && genreMatch && lengthMatch;
    });

    setShownBooks(filteredBooks);
  }

  return (
    <div className="block add">
      <h3>Add new book</h3>
      <form onSubmit={handleSubmit}>
        <div className="add__sort">
          <label>
            Author
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="">None</option>
              {authors.map((auth) => (
                <option value={auth} key={auth}>
                  {auth}
                </option>
              ))}
            </select>
          </label>
          <label>
            Genre
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">None</option>
              {genres.map((gen) => (
                <option value={gen} key={gen}>
                  {gen}
                </option>
              ))}
            </select>
          </label>
          <label>
            Length
            <select value={length} onChange={(e) => setLength(e.target.value)}>
              <option value="">None</option>
              <option value="short">Short</option>
              <option value="average">Average</option>
              <option value="long">Long</option>
            </select>
          </label>
        </div>
        <Button>Show</Button>
        <div className="bookshelf">
          {shownBooks.map((book) => (
            <Book book={book} btnText="Add" />
          ))}
        </div>
      </form>
    </div>
  );
}
