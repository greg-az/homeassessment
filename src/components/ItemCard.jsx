export default function ItemCard({ title, body }) {
  return (
    <article className="item-card">
      <h3>{title}</h3>
      <p>{body.slice(0, 100)}…</p>
    </article>
  );
}
