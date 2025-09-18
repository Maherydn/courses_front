export interface Product {
  id: number;
  name: string;
  quantity: number;
  unit: Unit;
  price: number;
  category: Category;
  status: number;
}

interface Category {
  id: number;
  name: string;
}

interface Unit {
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
  createdAt: string;
  amount: number;
}