import { DateIcon } from "@/app/_assets/icon";

const ItemsFilter = () => {
  return (
    <button className="flex gap-2 border-bordure border-2 rounded-lg px-4 py-1 cursor-pointer hover:bg-slate-300 duration-300">
      <p>tous</p>
      <DateIcon />
    </button>
  );
};

export default ItemsFilter;
