import Items from "./_components/Items/Items";
import Lists from "./_components/lists/Lists";
const data = [
  {
    product: "Yaourt",
    quantity: 2,
    price: 500,
    category: "Produit Laitier",
    status: true,
  },
  {
    product: "Yaourt",
    quantity: 2,
    price: 500,
    category: "Produit Laitier",
    status: true,
  },
  {
    product: "Yaourt",
    quantity: 2,
    price: 500,
    category: "Produit Laitier",
    status: false,
  },
  {
    product: "Yaourt",
    quantity: 2,
    price: 500,
    category: "Produit Laitier",
    status: true,
  },
  {
    product: "Yaourt",
    quantity: 2,
    price: 500,
    category: "Produit Laitier",
    status: true,
  },
];
export default function Home() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 h-full w-full">
        <Items />
        <Lists />
      </div>
    </>
  );
}
