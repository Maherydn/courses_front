// import { SearchIcon } from "@/app/_assets/icon";

interface ItemsSearchProps {
  onChange: (value: string) => void;
}

const ItemsSearch: React.FC<ItemsSearchProps> = ({ onChange }) => {
  return (
    <div className="relative w-full  ">
      <input
        type="text"
        placeholder="Rechercher un article... (nom ou category)"
        className="w-full px-2 md:px-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        onChange={(e) => onChange(e.target.value)}
      />
      {/* <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
      >
        <SearchIcon />
      </button> */}
    </div>
  );
};

export default ItemsSearch;
