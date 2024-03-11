import Button from "./Button";

export default function Info({ selectedBook, setSelectedBook }) {
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
        <Button>Mark as read</Button>
        <div className="delete"></div>
      </div>
    </ul>
  );
}
