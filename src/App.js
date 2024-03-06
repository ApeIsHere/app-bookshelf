import AddBook from "./components/AddBook";
import Bookshelf from "./components/Bookshelf";
import Button from "./components/Button";
import Info from "./components/Info";
import books from "./components/books.json";

const initialBooks = books.filter((book, i) => i < 3);

export default function App() {
  return (
    <div className="App">
      <Bookshelf books={initialBooks} />
      <Info book={books[1]} />
      <AddBook />
      <Button>Add new book</Button>
    </div>
  );
}
