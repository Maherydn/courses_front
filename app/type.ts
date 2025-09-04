export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category: string;
  status: boolean;
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