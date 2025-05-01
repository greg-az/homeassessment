import { useState, useMemo } from 'react';
import ItemList from './components/ItemList';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import { useFetchPosts } from './hooks/useFetchPosts';

export default function App() {
  const { posts, loading, error } = useFetchPosts();
  const [query, setQuery] = useState('');

  // Memo‑filtered array re‑calculates only when posts or query change
  const filtered = useMemo(
    () =>
      posts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.body.toLowerCase().includes(query.toLowerCase())
      ),
    [posts, query],
  );

  return (
    <main className="container">
      <h1>JSONPlaceholder Posts</h1>

      <SearchBar query={query} onChange={setQuery} />

      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <ItemList items={filtered} />}
    </main>
  );
}
