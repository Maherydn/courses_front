import { Products } from "../type";

export function filterArticles(list: Products, search: string): Products {
  const lowerSearch = search.toLowerCase();
  return {
    products: list.products.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerSearch) ||
        item.category.toLowerCase().includes(lowerSearch)
    ),
    amount: list.amount,
  };
}
