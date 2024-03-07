import { useState } from "react";
import AddBook from "./components/AddBook";
import Bookshelf from "./components/Bookshelf";
import Button from "./components/Button";
import Info from "./components/Info";
import books from "./components/books.json";

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

export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  function handleShowInfo() {
    setIsInfoOpen((isOpen) => !isOpen);
  }

  function handleShowAddBook() {
    setIsAddOpen((isOpen) => !isOpen);
  }

  return (
    <div className="App">
      <div>
        <h1>Personal Library</h1>
        <Bookshelf books={initialBooks} onOpenInfo={handleShowInfo} />

        <Button onClick={handleShowAddBook}>
          {isAddOpen ? "Close" : "Add new book"}
        </Button>

        {isAddOpen && <AddBook books={updatedBooks} />}
      </div>

      {isInfoOpen && (
        <Info book={updatedBooks[1]} onOpenInfo={handleShowInfo} />
      )}
    </div>
  );
}
