import Button from "./Button";

export default function Info({ book, onOpenInfo }) {
  return (
    <ul className="block info">
      <div className="close" onClick={onOpenInfo}>
        &times;
      </div>
      <li className="title">{book.title}</li>
      <li className="author">{book.author}</li>
      <img className="image" src={book.imageLink} alt={book.title} />
      <li className="pages">
        Pages: <strong>{book.pages}</strong>
      </li>
      <li className="year">
        Published: <strong>{book.year}</strong>
      </li>
      <li className="genre">
        Genre: <strong> {book.genre}</strong>
      </li>
      <li className="language">
        Language: <strong>{book.language}</strong>
      </li>
      <a className="link" href={book.link}>
        Wiki
      </a>
      <div className="btn-block">
        <Button>Mark as read</Button>
        <div className="delete"></div>
      </div>
    </ul>
  );
}
