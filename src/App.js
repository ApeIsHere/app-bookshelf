import { useState } from "react";
import AddBook from "./components/AddBook";
import Bookshelf from "./components/Bookshelf";
import Button from "./components/Button";
import Info from "./components/Info";
import books from "./components/books.json";
import Footer from "./components/Fotter";

//----------------------------------------------------------------
//Preparational work, updating books with new values: id and genre
const genres = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Drama",
  "Historical Fiction",
  "Non-fiction",
  "Biography",
];
function getRandomGenres() {
  const randomIndex = Math.floor(Math.random() * genres.length);
  return genres[randomIndex];
}
const updatedBooks = books.map((book, i) => ({
  ...book,
  id: i,
  read: false,
  genre: getRandomGenres(),
}));

const initialBooks = updatedBooks.filter((book) => book.id < 3);
//----------------------------------------------------------------

export default function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [books, setBooks] = useState(initialBooks);
  const [message, setMessage] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  function handleShowAddBook() {
    setIsAddOpen((isOpen) => !isOpen);
  }

  function handleAddBook(newBook) {
    setBooks((books) => [...books, newBook]);
    setMessage(
      `${newBook.title} by ${newBook.author} was successfuly added on your bookshelf`
    );
    setTimeout(() => setMessage(""), 4000);
  }

  function handleSelection(book) {
    setSelectedBook((curBook) => (curBook?.id === book.id ? null : book));
  }

  function handleDeleteBook(book) {
    const confirmed = window.confirm(`Delete ${book.title} ?`);
    if (confirmed) {
      setBooks((books) => books.filter((b) => b.id !== book.id));
      setMessage(`${book.title} by ${book.author} was deleted`);
      setTimeout(() => setMessage(""), 4000);

      setSelectedBook(null);
    }
  }

  function handleMarkAsRead(book) {
    setBooks((books) =>
      books.map((b) => (b.id === book.id ? { ...b, read: !b.read } : b))
    );
  }

  function checkCollection(book) {
    return books.some((b) => b.id === book.id);
  }

  return (
    <div className="App">
      <div>
        <h1 className="main-title">Personal Library</h1>
        <Bookshelf
          collection={books}
          selectedBook={selectedBook}
          onSelection={handleSelection}
          onMarkAsRead={handleMarkAsRead}
        />

        <Button onClick={handleShowAddBook}>
          {isAddOpen ? "Close" : "Add new book"}
        </Button>

        {isAddOpen && (
          <AddBook
            allBooks={updatedBooks}
            onAddBook={handleAddBook}
            selectedBook={selectedBook}
            onSelection={handleSelection}
            checkCollection={checkCollection}
          />
        )}
      </div>

      {selectedBook && (
        <Info
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          onAddBook={handleAddBook}
          onDeleteBook={handleDeleteBook}
          checkCollection={checkCollection}
        />
      )}

      <Footer collection={books}>{message}</Footer>
    </div>
  );
}
