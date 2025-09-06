"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateIcon } from "@/app/_assets/icon";
import { formatDate } from "@/app/_utils/formatDate";

const DateFilters = () => {
  // Par défaut -> mois actuel
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    const dateFormated = formatDate(date); // on pourra adapter formatDate si besoin
    console.log("Mois choisi :", date);
    console.log("Mois formaté :", dateFormated);
  };

  return (
    <div className="relative w-fit">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        customInput={
          <button className="flex items-center gap-2 border-2 border-bordure rounded-lg px-4 py-2 cursor-pointer hover:bg-slate-300 duration-300 text-black/50">
            <p className="text-sm">
              {selectedDate
                ? selectedDate.toLocaleDateString("fr-FR", {
                    month: "long",
                    year: "numeric",
                  })
                : "Sélectionner un mois"}
            </p>
            <DateIcon />
          </button>
        }
      />
    </div>
  );
};

export default DateFilters;
