import {
  DeleteIcon,
  EditIcon,
  LikeIcone,
  UnLikeIcon,
} from "@/app/(home)/_assets/icon";
import ItemTableBodyStatus from "./ItemTableBodyStatus";
import { Product } from "../../type";
import { toggleStatus } from "../../_services/ProductServices";
import refreshItemStore from "../../_store/refreshItemStore";

interface ItemsTableBodyProps extends Product {
  onEdit: (product: Product) => void;
}

const ItemsTableBody: React.FC<ItemsTableBodyProps> = ({
  id,
  name,
  quantity,
  unit,
  price,
  category,
  status,
  onEdit,
}) => {
  const { setRefreshItem } = refreshItemStore();
  const handleToggleStatus = async () => {
    try {
      await toggleStatus(id);
      setRefreshItem();
    } catch (error) {
      console.error("Erreur lors du toggle du statut :", error);
    }
  };

  return (
    <tr className="border-b border-t border-2 border-bordure hover:bg-gray-50 dark:text-white/80">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{quantity + " " + unit.name}</td>
      <td className="px-4 py-2">{price} ar</td>
      <td className="px-4 py-2">{category.name}</td>
      <td className="px-4 py-2">
        <ItemTableBodyStatus status={status} />
      </td>
      <td className="flex justify-center gap-2 w-full py-2 ">
        <button
          className="cursor-pointer duration-300 hover:-translate-y-0.5"
          onClick={handleToggleStatus}
        >
          {status == 1 ? <UnLikeIcon /> : <LikeIcone />}
        </button>
        <button
          className="cursor-pointer duration-300 hover:-translate-y-0.5"
          onClick={() =>
            onEdit({ id, name, quantity, unit, price, status, category })
          }
        >
          <EditIcon />
        </button>
        <button
          className="cursor-pointer duration-300 hover:-translate-y-0.5"
          onClick={() => console.log(`Delete clicked for id=${id}`)}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ItemsTableBody;
