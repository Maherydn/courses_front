"use client";

import { useEffect, useState } from "react";
import { HappyIcon } from "@/app/_assets/icon";
import { listsData } from "@/app/data";
import ListsCard from "./ListsCard";
import listStore from "@/app/_store/listStore";

const Lists = () => {
  const [listSelected, setlistSelected] = useState(listsData[0]);
  const { setItem } = listStore();
  useEffect(() => {
    setItem(listSelected.id, listSelected.title);
  }, []);

  return (
    <div className="flex flex-col items-center md:w-1/3 min-w-0 w-full border-2 border-bordure rounded-xl py-4 gap-6">
      <div className="flex items-center justify-between w-full h-16 px-10">
        <h2 className="text-3xl font-semibold">Listes</h2>
        <HappyIcon />
      </div>

      <button className="px-4 py-2 bg-blue rounded-lg w-fit text-white capitalize cursor-pointer hover:bg-blue/80 transition">
        Add new list
      </button>

      <div className="flex-1 overflow-y-auto w-full py-4">
        {listsData.map((item) => (
          <ListsCard
            key={item.id}
            list={item}
            idListSelected={listSelected.id}
            onClick={() => {
              setlistSelected(item);
              setItem(item.id, item.title);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Lists;
