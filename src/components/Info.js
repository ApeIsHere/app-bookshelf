import Button from "./Button";

export default function Info({ book }) {
  return (
    <ul className="block info">
      <div className="close">&times;</div>
      <li className="title">{book.title}</li>
      <li className="author">{book.author}</li>
      <img className="image" src={book.imageLink} alt={book.title} />
      <li className="pages">
        Pages <strong>{book.pages}</strong>
      </li>
      <li className="year">
        Published in <strong>{book.year}</strong>
      </li>
      <li className="language">
        <strong>{book.language}</strong>
      </li>
      <a className="link" href={book.link}>
        Wiki
      </a>
      <Button>Mark as read</Button>
    </ul>
  );
}
