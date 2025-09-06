export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category: Category;
  status: boolean;
}

interface Category {
  id: number;
  name: string;
}

export interface Products {
    products: Product[];
    amount: number
}

export interface List {
  id: number;
  title: string;
  date: string;
  amount: number;
}