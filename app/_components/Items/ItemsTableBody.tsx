import {
  DeleteIcon,
  EditIcon,
  LikeIcone,
  UnLikeIcon,
} from "@/app/_assets/icon";
import { Product } from "@/app/type";
import ItemTableBodyStatus from "./ItemTableBodyStatus";

interface ItemsTableBodyProps extends Product {
  onEdit: (product: Product) => void;
  // onDelete: (id: number) => void;
  // onToggleStatus: (id: number) => void;
}

const ItemsTableBody: React.FC<ItemsTableBodyProps> = ({
  id,
  name,
  quantity,
  price,
  category,
  status,
  onEdit,
  // onDelete,
  // onToggleStatus,
}) => {
  return (
    <tr className="border-b border-t border-2 border-bordure hover:bg-gray-50">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{quantity}</td>
      <td className="px-4 py-2">{price} ar</td>
      <td className="px-4 py-2">{category.name}</td>
      <td className="px-4 py-2">
        <ItemTableBodyStatus status={status} />
      </td>
      <td className="flex justify-center  gap-2 w-full py-2 ">
        <button
          className="cursor-pointer duration-300 hover:-translate-y-0.5"
          onClick={() =>
            console.log(
              status
                ? `Unlike clicked for id=${id}`
                : `Like clicked for id=${id}`
            )
          }
        >
          {status === true ? <UnLikeIcon /> : <LikeIcone />}
        </button>
        <button
          className="cursor-pointer duration-300 hover:-translate-y-0.5"
          onClick={() =>
            onEdit({ id, name, quantity, price, status, category })
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
