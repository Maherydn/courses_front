import React, { useState } from "react";
import ItemsTableBody from "./ItemsTableBody";
import ItemsTableHead from "./ItemsTableHead";
import { Product, Products } from "@/app/type";
import ProductModal from "../modal/ProductModal";

const ItemsTable: React.FC<Products> = ({ products, amount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const handleAdd = () => {
    setSelected(null);
    setIsOpen(true);
  };
  const handleEdit = (product: Product) => {
    setSelected(product);
    setIsOpen(true);
  };
  return (
    <>
      <div className="overflow-x-auto md:h-full h-96 relative ">
        <table className="w-full border-collapse text-sm text-left relative">
          <thead className="text-gray-600 sticky -top-1 bg-white z-10">
            <ItemsTableHead />
          </thead>
          <tbody className="whitespace-nowrap">
            {products.map((item, index) => (
              <ItemsTableBody key={index} {...item} onEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex items-center justify-between py-2 sticky bottom-0 px-4 -mt-6 border-2 border-bordure">
        <p>Amount</p>
        <p>{amount} ar</p>
      </div>

      <button onClick={handleAdd} className="px-4 py-2 bg-blue rounded-lg w-fit text-white capitalize cursor-pointer ">
        add product
      </button>

      {isOpen && (
        <ProductModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          product={selected ?? undefined}
        />
      )}
    </>
  );
};

export default ItemsTable;
