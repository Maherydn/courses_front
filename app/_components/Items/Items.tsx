"use client";

import { dataProducts } from "@/app/data";
import ItemsFilter from "./ItemsFilter";
import ItemsSearch from "./ItemsSearch";
import ItemsTable from "./ItemsTable";
import listStore from "@/app/_store/listStore";
import { useState } from "react";
import { filterArticles } from "@/app/_utils/filterArticles";

const Items = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { item } = listStore();
  
  const data = filterArticles(dataProducts, searchValue);

  return (
    <div className=" md:w-2/3 w-full border-2 border-bordure rounded-xl p-6 flex flex-col gap-6 ">
      <div className="flex items-center justify-between w-full h-16 px-10 ">
        <h2 className="text-3xl font-semibold">
          Articles{" "}
          <span className="text-sm text-black/40 font-normal italic">
            ({item.name})
          </span>
        </h2>
        <ItemsFilter />
      </div>
      <ItemsSearch onChange={setSearchValue} />
      <ItemsTable {...data} />
      <button className="px-4 py-2 bg-blue rounded-lg w-fit text-white capitalize cursor-pointer ">
        add product
      </button>
    </div>
  );
};

export default Items;
