import Button from "./Button";

export default function Book({
  book,
  onSelection,
  btnText,
  disabled,
  selectedBook,
}) {
  const isSelected = selectedBook?.id === book.id;

  return (
    <li
      className={isSelected ? `book ${disabled} selected` : `book ${disabled}`}
    >
      <label className="title">{book.title}</label>
      <img className="image" src={book.imageLink} alt={book.title}></img>
      <label className="author">{book.author}</label>
      <Button
        onClick={() => onSelection(book)}
        disabled={disabled}
        color={isSelected ? "#cca677" : ""}
      >
        {isSelected ? "Close" : btnText}
      </Button>
    </li>
  );
}
