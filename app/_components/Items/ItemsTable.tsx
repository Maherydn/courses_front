import React from "react";
import ItemsTableBody from "./ItemsTableBody";
import ItemsTableHead from "./ItemsTableHead";
import { Products } from "@/app/type";

const ItemsTable: React.FC<Products> = ({ products, amount }) => {
  return (
    <>
      <div className="overflow-x-auto md:h-full h-96 relative ">
        <table className="w-full border-collapse text-sm text-left relative">
          <thead className="text-gray-600 sticky top-0 bg-white z-40">
            <ItemsTableHead />
          </thead>
          <tbody className="whitespace-nowrap">
            {products.map((item, index) => (
              <ItemsTableBody key={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex items-center justify-between py-2 sticky bottom-0 px-4 -mt-6 border-2 border-bordure">
        <p>amount</p>
        <p>{amount} ar</p>
      </div>
    </>
  );
};

export default ItemsTable;
