import Button from "./Button";

export default function Book({ book, onClick, btnText, disabled }) {
  return (
    <li className={`book ${disabled}`}>
      <label className="title">{book.title}</label>
      <img className="image" src={book.imageLink} alt={book.title}></img>
      <label className="author">{book.author}</label>
      <Button onClick={onClick} disabled={disabled}>
        {btnText}
      </Button>
    </li>
  );
}
