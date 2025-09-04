import {
  DeleteIcon,
  EditIcon,
  LikeIcone,
  UnLikeIcon,
} from "@/app/_assets/icon";
import { Product } from "@/app/type";

const ItemsTableBody: React.FC<Product> = ({
  name,
  quantity,
  price,
  category,
  status,
}) => {
  return (
    <tr className="border-b border-t border-2 border-bordure hover:bg-gray-50">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{quantity}</td>
      <td className="px-4 py-2">{price} ar</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">
        {status === true ? (
          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full ">
            ✔ Completed
          </span>
        ) : (
          <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
            ✖ Rejected
          </span>
        )}
      </td>
      <td className="flex justify-center  gap-2 w-full py-2">
        {status === true ? (
          <button className="cursor-pointer">
            <UnLikeIcon />
          </button>
        ) : (
          <button className="cursor-pointer">
            <LikeIcone />
          </button>
        )}
        <button className="cursor-pointer">
          <EditIcon />
        </button>
        <button className="cursor-pointer">
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ItemsTableBody;
