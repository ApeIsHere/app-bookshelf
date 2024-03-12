import Button from "./Button";

export default function Info({
  selectedBook,
  setSelectedBook,
  onAddBook,
  onDeleteBook,
  checkCollection,
}) {
  const timeToRead = Math.round((selectedBook.pages * 2) / 60);
  return (
    <ul className="block info">
      <div className="close" onClick={() => setSelectedBook(null)}>
        &times;
      </div>
      <li className="title">{selectedBook.title}</li>
      <li className="author">{selectedBook.author}</li>
      <img
        className="image"
        src={selectedBook.imageLink}
        alt={selectedBook.title}
      />
      <li className="pages">
        Pages: <strong>{selectedBook.pages}</strong>
      </li>
      <li className="pages">
        Time to read:{" "}
        <strong>
          {timeToRead} {timeToRead < 2 ? "hour" : "hours"}
        </strong>
      </li>
      <li className="year">
        Published: <strong>{selectedBook.year}</strong>
      </li>
      <li className="genre">
        Genre: <strong> {selectedBook.genre}</strong>
      </li>
      <li className="language">
        Language: <strong>{selectedBook.language}</strong>
      </li>
      <a className="link" href={selectedBook.link}>
        Wiki
      </a>
      <div className="btn-block">
        {checkCollection(selectedBook) ? (
          <Button onClick={() => onDeleteBook(selectedBook)}>Delete</Button>
        ) : (
          <Button onClick={() => onAddBook(selectedBook)}>Add</Button>
        )}
      </div>
    </ul>
  );
}
