import React, { useState } from "react";
import ItemsTableBody from "./ItemsTableBody";
import ItemsTableHead from "./ItemsTableHead";
import { Product, Products } from "@/app/(home)/type";
import ProductModal from "../modal/ProductModal";
import refreshItemStore from "../../_store/refreshItemStore";

const ItemsTable: React.FC<Products> = ({ products, amount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const { setRefreshItem } = refreshItemStore();

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
      <div className="overflow-x-auto md:h-full h-96 relative">
        <table className="w-full border-collapse text-sm text-left">
          <thead className="text-gray-600 sticky top-0 bg-white z-10">
            <ItemsTableHead />
          </thead>

          <tbody className="whitespace-nowrap">
            {products && products.length > 0 ? (
              products.map((item, index) => (
                <ItemsTableBody key={index} {...item} onEdit={handleEdit} />
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <div className="flex items-center justify-center h-40 text-gray-500">
                    <p>No products available</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full flex items-center justify-between py-2 sticky bottom-0 px-4 -mt-6 border-2 border-bordure bg-white">
        <p>Amount</p>
        <p>{amount} ar</p>
      </div>

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue rounded-lg w-fit text-white capitalize cursor-pointer"
      >
        Add product
      </button>

      {isOpen && (
        <ProductModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setRefreshItem();
          }}
          product={selected ?? undefined}
        />
      )}
    </>
  );
};

export default ItemsTable;
