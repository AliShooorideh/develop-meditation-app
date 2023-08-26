interface IProduct {
  number: number;
  text: string;
}
export default function Box(item: IProduct) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white p-2 py-10 shadow-xl">
      <span className="text-4xl font-bold">{item.number}</span>
      <span>{item.text}</span>
    </div>
  );
}
