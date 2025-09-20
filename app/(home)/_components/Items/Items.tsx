"use client";

import ItemsFilter from "./ItemsFilter";
import ItemsSearch from "./ItemsSearch";
import ItemsTable from "./ItemsTable";
import listStore from "@/app/(home)/_store/listStore";
import { useEffect, useState } from "react";
import { filterArticles } from "@/app/(home)/_utils/filterArticles";
import { Products } from "../../type";
import { fetchProducts } from "../../_services/ProductServices";
import refreshItemStore from "../../_store/refreshItemStore";

const Items = () => {
  const [onlyFalse, setOnlyFalse] = useState(false);
  const [data, setData] = useState<Products>({ products: [], amount: 0 });

  const { refreshItem } = refreshItemStore();

  const [searchValue, setSearchValue] = useState<string>("");
  const { item } = listStore();

  const dataFilter = filterArticles(data, searchValue, onlyFalse);

  useEffect(() => {
    if (item.id > 0) {
      fetchProducts(item.id)
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.error("Erreur fetch products:", err));
    }

    if (item.id == 0) {
      setData({ products: [], amount: 0 });
    }
  }, [item, refreshItem]);

  return (
    <div className="md:w-2/3 w-full border-2 border-bordure rounded-xl p-6 flex flex-col gap-6">
      <div className="flex md:items-center justify-between w-full h-16 md:px-10 md:flex-row flex-col">
        <h2 className="text-3xl font-semibold dark:text-white">
          Articles
          <span className="text-sm text-black/40 font-normal italic dark:text-white/60">
            ({item.name})
          </span>
        </h2>
        <ItemsFilter onFilterChange={(value) => setOnlyFalse(value)} />
      </div>
      <ItemsSearch onChange={setSearchValue} />
      <ItemsTable {...dataFilter} />
    </div>
  );
};

export default Items;
