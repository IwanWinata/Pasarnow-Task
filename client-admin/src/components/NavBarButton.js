import { BiSearchAlt, BiNews } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const NavBarButton = () => {
  const location = useLocation();
  const navigate = useNavigate()
  
  const styleSearch = () => {
    if(location.pathname === "/"){
        return "p-2 shadow-lg rounded-md text-center justify-center bg-blue-500 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }else{
        return "p-2 shadow-lg rounded-md text-center justify-center transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }
  }

  const styleImage = () => {
    if(location.pathname === "/image"){
        return "p-2 shadow-lg rounded-md text-center justify-center bg-blue-500 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }else{
        return "p-2 shadow-lg rounded-md text-center justify-center transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }
  }

  const styleNews = () => {
    if(location.pathname === "/news"){
        return "p-2 shadow-lg rounded-md text-center justify-center bg-blue-500 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }else{
        return "p-2 shadow-lg rounded-md text-center justify-center transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }
  }

  const styleBookmarks = () => {
    if(location.pathname === "/bookmark"){
        return "p-2 shadow-lg rounded-md text-center justify-center bg-blue-500 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }else{
        return "p-2 shadow-lg rounded-md text-center justify-center transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
    }
  }

  return (
    <div className="flex flex-row flex-end justify-end items-end gap-4 w-full y-">
      <div className="mr-6 mt-2">
        <button onClick={() => navigate("/")} className={styleSearch()}>
          <BiSearchAlt size={20} />
        </button>
        <p className="font-semibold text-base">Search</p>
      </div>
      <div className="mr-6 mt-2">
        <button onClick={() => navigate("/image")} className={styleImage()}>
          <BsCardImage size={20} />
        </button>
        <p className="font-semibold text-base">Image</p>
      </div>
      <div className="mr-6 mt-2">
        <button onClick={() => navigate("/news")} className={styleNews()}>
          <BiNews size={20} />
        </button>
        <p className="font-semibold text-base">News</p>
      </div>
      <div className="mr-6 mt-2">
        <button onClick={() => navigate("/bookmark")} className={styleBookmarks()}>
          <FiBookmark size={20} />
        </button>
        <p className="font-semibold text-base">Bookmarks</p>
      </div>
    </div>
  );
};
export default NavBarButton;
