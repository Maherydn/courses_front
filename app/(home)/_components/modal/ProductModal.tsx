import { Product } from "@/app/(home)/type";
import ProductForm from "./ProductForm";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 h-screen w-full"
    >
      <div className="bg-white rounded-lg shadow-md w-fullshadow-lg p-6 w-96">
        <div className="flex justify-between w-full">
          <h2 className="text-lg font-semibold mb-4">
            {product ? "Modifier le produit" : "Ajouter un produit"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-md text-slate-800 hover:bg-red-500 border-2 border-red-500 w-6 h-6 text-xl flex justify-center items-center pb-px cursor-pointer hover:text-white duration-300 "
          >
            <p>x</p>
          </button>
        </div>
        <ProductForm product={product} onSuccess={onClose} />
      </div>
    </dialog>
  );
};

export default ProductModal;
