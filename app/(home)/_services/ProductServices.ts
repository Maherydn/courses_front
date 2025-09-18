import { Api } from "@/app/_lib/axios";

export const fetchProducts = async (id: number) => {
  const { data } = await Api.get(`/purchase-lists/${id}/products`);
  return data;
};

// Création d'un produit
export const createProduct = async (product: {
  name: string;
  quantity: number;
  unitId: number;
  price: number;
  status: number;
  categoryId: number;
  purchaseListId: number;
}) => {
  const { data } = await Api.post("/products", {
    name: product.name,
    quantity: product.quantity,
    unit_id: product.unitId,
    price: product.price,
    status: product.status,
    category_id: product.categoryId,
    purchase_list_id: product.purchaseListId,
  });
  return data;
};

// Mise à jour d'un produit
export const updateProduct = async (
  productId: number,
  product: {
    name: string;
    quantity: number;
    unitId: number;
    price: number;
    status: number;
    categoryId: number;
  }
) => {
  const { data } = await Api.put(`/products/${productId}`, {
    name: product.name,
    quantity: product.quantity,
    unit_id: product.unitId,
    price: product.price,
    status: product.status,
    category_id: product.categoryId,
  });

  return data;
};

export const toggleStatus = async (id: number) => {
  const { data } = await Api.patch(`/products/${id}/toggle-status`);
  return data;
};
