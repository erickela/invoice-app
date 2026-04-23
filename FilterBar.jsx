function FilterBar({ filter, setFilter }) {
  const options = ["All", "Draft", "Pending", "Paid"];

  return (
    <div>
      {options.map((opt) => (
        <button key={opt} onClick={() => setFilter(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
