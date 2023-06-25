import ListingSkeleton from "./ListingSkeleton";

export default function MarketSkeleton() {
  const items = [...Array(10).keys()];

  return (
    <>
      {items.map(item => <ListingSkeleton key={item} />)}
    </>
  );
}
