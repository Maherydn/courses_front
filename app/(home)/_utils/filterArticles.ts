import { Products } from "../type";

export function filterArticles(
  list: Products,
  search: string,
  onlyFalse: boolean = false
): Products {
  const lowerSearch = search.toLowerCase();

  return {
    products: list.products.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(lowerSearch) ||
        item.category.name.toLowerCase().includes(lowerSearch);

      const matchStatus = onlyFalse ? item.status == false : true;

      return matchSearch && matchStatus;
    }),
    amount: list.amount,
  };
}
