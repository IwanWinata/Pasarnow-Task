import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const moveHandler = () => {
    if (location.pathname === "/") {
      navigate({
        pathname: "/search-result",
        search: createSearchParams({
          google: search,
        }).toString(),
      });
    } else if (location.pathname === "/image") {
      navigate({
        pathname: "/image-result",
        search: createSearchParams({
          google: search,
        }).toString(),
      });
    } else {
      navigate({
        pathname: "/news-result",
        search: createSearchParams({
          google: search,
        }).toString(),
      });
    }
  };
  return (
    <>
      <div className="w-1/4 h-1/4 justify-center items-center m-auto content-center mt-8">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
          alt=""
        />
      </div>
      <div className="md:w-2/5 md:h-2/5 sm:w-1/2 sm:h-1/2 justify-center items-center m-auto content-center">
        <form className="rounded-full p-1 box-border mt-6 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full gap-4 md:flex sm:flex-row items-center">
          <input
            value={search}
            onChange={changeSearch}
            type="text"
            className=" rounded-full shadow-lg w-full py-2 px-4 focus:outline-none bg-transparent"
            placeholder="Search here ......."
          />
          <button
            onClick={() => {
              moveHandler();
            }}
            className="text-sm bg-primary py-2 px-4 rounded-full bg-red-500 text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
