import ItemsFilter from "./ItemsFilter";
import ItemsSearch from "./ItemsSearch";

const Items = () => {
    return (
        <div className=" md:w-2/3 w-full border-2 border-bordure rounded-xl p-6 space-y-6 ">
            <div className="flex items-center justify-between w-full h-16 px-10 ">
                <h2 className="text-3xl font-semibold">Articles</h2>
                <ItemsFilter/>
            </div>
            <ItemsSearch/>
        </div>
    );
}

export default Items;