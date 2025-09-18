import { List } from "@/app/(home)/type";
import { useState } from "react";
import { createList, updateList } from "../../_services/ListServices";
import listStore from "../../_store/listStore";

interface ListFormProps {
  list?: List;
  onSuccess: () => void;
}

const ListForm: React.FC<ListFormProps> = ({ list, onSuccess }) => {
  const initialForm = list ? { id: list.id, title: list.title } : { title: "" };
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const { setItem } = listStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return; // ne rien envoyer si vide
    setLoading(true);

    try {
      if (list?.id) {
        // ⚡ Update
        const updated = await updateList(list.id, form.title);
        setItem(updated.id, updated.title);
      } else {
        // ⚡ Create
        const created = await createList(form.title);
        setItem(created.id, created.title);
      }
      onSuccess(); // fermer modal et rafraîchir la liste
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de la liste :", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      {/* Nom */}
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 text-gray-700 font-medium">
          Nom
        </label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Nom de la liste"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-colors duration-200 disabled:opacity-50"
      >
        {list ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
};

export default ListForm;
