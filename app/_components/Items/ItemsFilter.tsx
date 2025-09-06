import { useState } from "react";

interface ItemsFilterProps {
  onFilterChange: (showOnlyFalse: boolean) => void;
}

const ItemsFilter: React.FC<ItemsFilterProps> = ({ onFilterChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onFilterChange(e.target.checked); 
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span className="text-sm text-black/60">Afficher uniquement les impayés</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 border-2 border-bordure rounded"
      />
    </label>
  );
};

export default ItemsFilter;
