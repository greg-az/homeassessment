import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  return (
    <section className="item-list">
      {items.map((i) => (
        <ItemCard key={i.id} title={i.title} body={i.body} />
      ))}
    </section>
  );
}
