import DateFilters from "./DateFilters";

const Headers = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white z-20">
      <div className="flex w-full items-center md:h-20 h-fit md:gap-20 md:px-10 px-4 md:pt-0 py-2 ">
        <div className="flex-1  h-full flex md:items-center md:justify-between md:flex-row flex-col gap-2 md:gap-0 ">
          <div className=" h-full flex items-center md:gap-16 gap-4">
            <div className="md:h-12 md:w-12 h-10 w-10 bg-blue md:rounded-xl rounded-lg"></div>
            <h1 className="md:text-4xl text-2xl font-bold">courses</h1>
          </div>
          <DateFilters />
        </div>
        <button className="md:text-2xl text-xl md:px-4 px-4 py-1 h-fit w-fit bg-[#B0B0B0] rounded-full cursor-pointer hover:bg-gray-400 duration-300 ">
          sombre
        </button>
      </div>
    </header>
  );
};

export default Headers;
