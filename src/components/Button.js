export default function Button({ children, onClick, disabled, color }) {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: `${color}` }}
    >
      {children}
    </button>
  );
}
