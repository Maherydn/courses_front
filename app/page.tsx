import Items from "./_components/Items/Items";
import Lists from "./_components/lists/Lists";

export default function Home() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 h-full">
        <Items />
        <Lists/>
      </div>
    </>
  );
}
