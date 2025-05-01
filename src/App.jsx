import ItemList from './components/ItemList';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import { useFetchPosts } from './hooks/useFetchPosts';

export default function App() {
  const { posts, loading, error } = useFetchPosts();

  return (
    <main className="container">
      <h1>JSONPlaceholder Posts</h1>
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <ItemList items={posts} />}
    </main>
  );
}
