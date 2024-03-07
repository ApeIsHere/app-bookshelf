import Button from "./Button";

export default function Book({ book, onOpenInfo, btnText }) {
  return (
    <li className="book">
      <label className="title">{book.title}</label>
      <img className="image" src={book.imageLink} alt={book.title}></img>
      <label className="author">{book.author}</label>
      <Button onClick={onOpenInfo}>{btnText}</Button>
    </li>
  );
}
