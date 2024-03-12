import Button from "./Button";

export default function Book({
  book,
  onSelection,
  btnText,
  disabled,
  className,
  selectedBook,
  onClick,
}) {
  const isSelected = selectedBook?.id === book.id;

  return (
    <li
      className={
        isSelected ? `book ${className} selected` : `book ${className}`
      }
    >
      <label className="title">{book.title}</label>
      <img
        className="image"
        src={book.imageLink}
        alt={book.title}
        onClick={() => onSelection(book)}
      ></img>
      <label className="author">{book.author}</label>
      <Button disabled={disabled} onClick={onClick}>
        {btnText}
      </Button>
    </li>
  );
}
