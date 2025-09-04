const title: string[] = [
  "product",
  "quantity",
  "price",
  "category",
  "status",
  "action",
];

const ItemsTableHead = () => {
  return (
    <tr className="capitalize">
      {title.map((title, index) => (
        <th className="px-4 py-2" key={index}>
          {title}
        </th>
      ))}
    </tr>
  );
};

export default ItemsTableHead;
