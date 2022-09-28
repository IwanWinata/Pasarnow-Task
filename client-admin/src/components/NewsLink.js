import { BsBookmarkPlus, BsBookmarkDash } from "react-icons/bs";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NewsLink = ({ el, fetchNews, fetchBookmarks }) => {
  const location = useLocation();
  const [bookmarks, setBookmarks] = useState([]);

  const bookmarkHandler = () => {
    let data = localStorage.getItem("myBookmarks");
    setBookmarks(JSON.parse(data));
  };

  useEffect(() => {}, []);

  const addHandler = () => {
    let myBookmarks = localStorage.getItem("myBookmarks");
    if (!myBookmarks) {
      localStorage.setItem("myBookmarks", JSON.stringify([el]));
    } else {
      myBookmarks = JSON.parse(myBookmarks);
      let foundBookmarks = myBookmarks.find((book) => el.id === book.id);
      if (foundBookmarks) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This news already in your Bookmarks",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      } else {
        myBookmarks.push(el);
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks));
        fetchNews();
      }
    }
  };

  const deleteHanler = () => {
    let myBookmarks = localStorage.getItem("myBookmarks");
    myBookmarks = JSON.parse(myBookmarks);
    let filtered = myBookmarks.filter((book) => book.id !== el.id);
    localStorage.setItem("myBookmarks", JSON.stringify(filtered));
    if (location.pathname === "/bookmark") {
      fetchBookmarks();
    } else {
      fetchNews();
    }
  };

  return (
    <div className="md:w-1/3 sm:w-full m-auto mt-8 text-start">
      <div className="flex flex-row">
        <p className="text-xs text-black">{el.link}</p>
        {!localStorage.getItem("myBookmarks") && (
          <button
            onClick={() => addHandler()}
            className="ml-2 mb-1 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
          >
            <BsBookmarkPlus size={25} />
          </button>
        )}
        {localStorage.getItem("myBookmarks") &&
          !JSON.parse(localStorage.getItem("myBookmarks")).find(
            (book) => el.id === book.id
          ) && (
            <button
              onClick={() => addHandler()}
              className="ml-2 mb-1 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
            >
              <BsBookmarkPlus size={25} />
            </button>
          )}
          {
            localStorage.getItem("myBookmarks") &&
            JSON.parse(localStorage.getItem("myBookmarks")).find(
              (book) => el.id === book.id
            ) &&
            <button
              onClick={() => deleteHanler()}
              className="ml-2 mb-1 transition duration-300 hover:scale-105 transform: hover:-translate-y-1"
            >
              <BsBookmarkDash size={25} />
            </button>
          }
      </div>
      <a
        href={el.link}
        className="md:text-lg text-blue-500 sm:text-sm font-semibold"
      >
        {el.title}
      </a>
    </div>
  );
};
export default NewsLink;
