interface ItemTableBodyStatusProps {
  status: number;
}

const ItemTableBodyStatus: React.FC<ItemTableBodyStatusProps> = ({
  status,
}) => {
  return status == 1 ? (
    <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
      ✔ Purchased
    </span>
  ) : (
    <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
      ✖ Pending
    </span>
  );
};

export default ItemTableBodyStatus;
