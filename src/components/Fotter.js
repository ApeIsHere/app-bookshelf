export default function Footer({ children, collection }) {
  const numBooks = collection.length;
  const timeToRead = collection
  .filter((book) => !book.read)
  .reduce((acc, book) => acc + book.pages, 0) * 2 / 60;

  return (
    <div className="footer">
      <p className="message">{children}</p>
      <div className="stats">
        <p>
          Books in collection: <span>{numBooks}</span>
        </p>
        <p>
          Time to read: <span>{Math.round(timeToRead)}h</span>
        </p>
      </div>
    </div>
  );
}
