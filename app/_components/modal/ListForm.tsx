import { List } from "@/app/type";
import { useState } from "react";

interface ListFormProps {
  list?: List;
  onSuccess: () => void;
}

const ListForm: React.FC<ListFormProps> = ({ list, onSuccess }) => {
  const initialForm = list
    ? {
        id: list.id,
        title: list.title,
      }
    : {
        title: "",
      };

  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") {
      setForm({ ...form, title: (value) });
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
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Nom du produit"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-colors duration-200"
      >
        {list ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
};

export default ListForm;
