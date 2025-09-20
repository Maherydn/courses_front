"use client";

import { useEffect, useState } from "react";
import { HappyIcon } from "@/app/(home)/_assets/icon";
import { listsData } from "@/app/(home)/data";
import ListsCard from "./ListsCard";
import listStore from "@/app/(home)/_store/listStore";
import { List } from "@/app/(home)/type";
import ListModal from "../modal/ListModal";
import { useSearchParams } from "next/navigation";
import { fetchLists } from "../../_services/ListServices";

const Lists = () => {
  const [listSelected, setListSelected] = useState<List>(listsData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState<List | null>(null);
  const [data, setData] = useState<List[]>([]);

  const searchParams = useSearchParams();

  // Date actuelle
  const now = new Date();

  // Valeur par défaut : mois et année courant si pas dans l'URL
  const month = searchParams.get("month") || String(now.getMonth() + 1); // 0-indexed → +1
  const year = searchParams.get("year") || String(now.getFullYear());

  const { setItem } = listStore();

  const handleAdd = () => {
    setSelected(null);
    setIsOpen(true);
  };

  // ⚡ Optionnel : handleEdit si besoin
  // const handleEdit = (list: List) => {
  //   setSelected(list);
  //   setIsOpen(true);
  // };

  // Fetch des listes à chaque changement de month, year ou listSelected
  useEffect(() => {
    // setItem(listSelected.id, listSelected.title);

    fetchLists(Number(month), Number(year))
      .then((res) => {
        setData(res.purchaseLists);

        if (res.purchaseLists.length > 0) {
          setListSelected(res.purchaseLists[0]);
          setItem(res.purchaseLists[0].id, res.purchaseLists[0].title);
        }
      })
      .catch((err) => console.error("Erreur fetch lists:", err));
  }, [month, year, setItem, refresh]);

  return (
    <div className="flex flex-col items-center md:w-1/3 min-w-0 w-full border-2 border-bordure rounded-xl py-4 gap-6">
      <div className="flex items-center justify-between w-full h-16 px-10">
        <h2 className="text-3xl font-semibold dark:text-white">Listes</h2>
        <HappyIcon />
      </div>

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue rounded-lg w-fit text-white capitalize cursor-pointer hover:bg-blue/80 transition"
      >
        Add new list
      </button>

      <div className="flex-1 overflow-y-auto w-full py-4">
        {data?.length > 0 ? (
          data?.map((item) => (
            <ListsCard
              key={item.id}
              list={item}
              idListSelected={listSelected.id}
              onClick={() => {
                setListSelected(item);
                setItem(item.id, item.title);
              }}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No lists available</p>
        )}
      </div>

      {isOpen && (
        <ListModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setRefresh(!refresh);
          }}
          list={selected ?? undefined}
        />
      )}
    </div>
  );
};

export default Lists;
