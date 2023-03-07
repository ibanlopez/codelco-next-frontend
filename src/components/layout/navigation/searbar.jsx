import MagnifyingGlass from '@heroicons/react/24/solid/MagnifyingGlassIcon';

const SearchBar = () => {
  return (
    <div className="col-span-full sm:col-start-2 sm:col-end-3 relative">
      <input
        type="search"
        className="border-gray-300 border rounded-full py-2 px-4 w-full focus:shadow-lg"
        placeholder="Buscar producto..."
      />
      <MagnifyingGlass className="h-6 w-6 text-gray-300 absolute right-8 top-[21%]" />
    </div>
  );
};

export default SearchBar;
