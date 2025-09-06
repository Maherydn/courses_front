interface ItemTableBodyStatusProps {
  status: boolean;
}

const ItemTableBodyStatus: React.FC<ItemTableBodyStatusProps> = ({ status }) => {
  return status ? (
    <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
      ✔ Completed
    </span>
  ) : (
    <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
      ✖ Rejected
    </span>
  );
};

export default ItemTableBodyStatus;
