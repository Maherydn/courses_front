import React from "react";
import { List } from "@/app/(home)/type";

interface ListsProps {
  list: List;
  idListSelected: number;
  onClick: () => void;
}

const ListsCard: React.FC<ListsProps> = ({ list, idListSelected, onClick }) => {
  const isSelected = list.id === idListSelected;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border-y-2 border-bordure py-2 px-4 flex flex-col w-full gap-2 transition-colors rounded-lg ${
        isSelected ? "bg-blue text-white" : "hover:bg-gray-100"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-2xl font-medium dark:text-white">{list.title}</h3>
        <span className="text-lg">...</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-black/50 dark:text-white/50">{list.createdAt}</p>
        <p className="text-lg font-semibold">{list.amount} Ar</p>
      </div>
    </div>
  );
};

export default ListsCard;
