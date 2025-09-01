import { DateIcon } from "@/app/_assets/icon";

// ajout filter par date avec react-datepicker
const DateFilters = () => {
    return (
        <button className="flex gap-2 border-bordure border-2 rounded-lg px-4 py-2 cursor-pointer hover:bg-slate-300 duration-300 w-fit ">
            <p>28 aout 2025</p>
            <DateIcon/>
        </button>
    );
}

export default DateFilters;