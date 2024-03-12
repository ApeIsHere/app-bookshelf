export default function SortingElement({
  children,
  value,
  setter,
  array,
  def,
}) {
  return (
    <label>
      {children}
      <select value={value} onChange={(e) => setter(e.target.value)}>
        <option value="">{def}</option>
        {array.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </label>
  );
}
