import { useState } from "react";
import { Product } from "@/app/type";

interface ProductFormProps {
  product?: Product;
  onSuccess: () => void;
}

const categories = [
  { id: 1, name: "Produit Laitier" },
  { id: 2, name: "Boisson" },
  { id: 3, name: "Épicerie" },
];

const ProductForm: React.FC<ProductFormProps> = ({ product, onSuccess }) => {
  const initialForm = product
    ? {
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        status: product.status,
        categoryId: product.category.id,
      }
    : {
        name: "",
        quantity: 0,
        price: 0,
        status: false,
        categoryId: categories[0].id,
      };

  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm({ ...form, categoryId: Number(value) });
    } else if (name === "quantity" || name === "price") {
      setForm({ ...form, [name]: Number(value) });
    } else if (name === "status") {
      setForm({ ...form, status: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Produit saisi :", form);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      {/* Nom */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-gray-700 font-medium">
          Nom
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nom du produit"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Quantité */}
      <div className="flex flex-col">
        <label htmlFor="quantity" className="mb-1 text-gray-700 font-medium">
          Quantité
        </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="0"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Prix */}
      <div className="flex flex-col">
        <label htmlFor="price" className="mb-1 text-gray-700 font-medium">
          Prix
        </label>
        <input
          id="price"
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="500"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Catégorie */}
      <div className="flex flex-col">
        <label htmlFor="category" className="mb-1 text-gray-700 font-medium">
          Catégorie
        </label>
        <select
          id="category"
          name="category"
          value={form.categoryId}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Statut */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="status"
          checked={form.status}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">Déjà acheté</span>
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-colors duration-200"
      >
        {product ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
};

export default ProductForm;
