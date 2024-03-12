import { useEffect, useState } from "react";
import Button from "./Button";
import Book from "./Book";
import SortingElement from "./SortingElement";

export default function AddBook({
  allBooks,
  onAddBook,
  selectedBook,
  onSelection,
  checkCollection,
}) {
  const [i, setI] = useState(0);
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("");
  const [shownBooks, setShownBooks] = useState();
  const authors = [...new Set(allBooks.map((book) => book.author))].sort();
  const genres = [...new Set(allBooks.map((book) => book.genre))].sort();
  const range = ["Short", "Average", "Long"];
  const isFilterOn = author || genre || length;

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
      setShownBooks();
    }
  }
  
  
  useEffect(() => {
    if (i>=1) {
      filterBooks();
    }
    setI((i) => i += 1);
  }, [author, genre, length]);
  

  function handleSubmit(e) {
    e.preventDefault();
    if (shownBooks && !isFilterOn) {
      setAuthor("");
      setGenre("");
      setLength("");
      setShownBooks();
    } else if (isFilterOn){
      setAuthor("");
      setGenre("");
      setLength("");
      setI(0);
    } else {
      setAuthor("");
      setGenre("");
      setLength("");
      filterBooks();
    }
  }

  return (
    <div className="block add">
      <h3>Add new book</h3>
      <form onSubmit={handleSubmit}>
        <div className="add__sort">
          <SortingElement
            value={author}
            setter={setAuthor}
            array={authors}
            def={"All"}
          >
            Author
          </SortingElement>
          <SortingElement
            value={genre}
            setter={setGenre}
            array={genres}
            def={"All"}
          >
            Genre
          </SortingElement>
          <SortingElement
            value={length}
            setter={setLength}
            array={range}
            def={"All"}
          >
            Length
          </SortingElement>
        </div>
        <Button>{isFilterOn ? "Clear Filters" : shownBooks ? "Close All" : "Show All"}</Button>
        {<p></p>}
      </form>
      <ShownBooks />
    </div>
  );

  function ShownBooks() {
    if (!shownBooks && !isFilterOn) {
      return null;
    }

    if (!shownBooks && isFilterOn){
      return <p className="search-result">No books were found...</p>;
    }

    if (shownBooks?.length > 0) {
      return (
        <div className="bookshelf">
          {shownBooks.map((book) => (
            <Book
              book={book}
              btnText={checkCollection(book) ? "in Collection" : "Add"}
              disabled={checkCollection(book) && "disabled"}
              className={checkCollection(book) && "disabled"}
              key={book.id}
              selectedBook={checkCollection(book) || selectedBook}
              onSelection={() => onSelection(book)}
              onClick={() => onAddBook(book)}
            />
          ))}
        </div>
      );
    }
  }
}
