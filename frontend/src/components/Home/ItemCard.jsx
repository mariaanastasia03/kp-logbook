export default function ItemCard({ title, number }) {
  return (
    <>
      <div className="flex w-[30vw] flex-col items-center justify-center rounded-xl bg-black py-4 text-white-normal">
        <span>{title}</span>
        <span>{number}</span>
      </div>
    </>
  );
}
