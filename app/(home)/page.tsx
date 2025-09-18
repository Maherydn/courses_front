import { Suspense } from "react";
import Items from "./_components/Items/Items";
import Lists from "./_components/lists/Lists";
import Headers from "./_components/headers/Headers";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Chargement filtres...</div>}>
        <Headers />
      </Suspense>
      <div className="flex md:flex-row flex-col-reverse gap-10 h-full w-full">
        <Items />
        <Suspense fallback={<p>Chargement des listes...</p>}>
          <Lists />
        </Suspense>
      </div>
    </>
  );
}
