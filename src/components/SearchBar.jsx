export default function SearchBar({ query, onChange }) {
  return (
    <input
      role="searchbox"
      className="search"
      type="search"
      placeholder="Search posts…"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
