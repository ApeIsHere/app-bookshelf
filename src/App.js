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
    setTimeout(() => setMessage(""), 5000);
  }

  function handleSelection(book) {
    setSelectedBook((curBook) => (curBook?.id === book.id ? null : book));
  }

  return (
    <div className="App">
      <div>
        <h1 className="main-title">Personal Library</h1>
        <Bookshelf
          collection={books}
          selectedBook={selectedBook}
          onSelection={handleSelection}
        />

        <Button onClick={handleShowAddBook}>
          {isAddOpen ? "Close" : "Add new book"}
        </Button>

        {isAddOpen && (
          <AddBook
            collection={books}
            allBooks={updatedBooks}
            onAddBook={handleAddBook}
          />
        )}
      </div>

      {selectedBook && (
        <Info selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      )}

      <Footer>{message}</Footer>
    </div>
  );
}
