import NewsLink from "../components/NewsLink";
import { useState, useEffect } from "react";
const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  let data = localStorage.getItem("myBookmarks");

  const fetchBookmarks = () => {
    let data = localStorage.getItem("myBookmarks");
    setBookmarks(JSON.parse(data));
  };

  useEffect(() => {
    fetchBookmarks();
  }, [data]);

  return (
    <>
      {bookmarks.length === 0 || !bookmarks ? (
        <img
          className="m-auto"
          src="https://i.pinimg.com/originals/75/9c/22/759c22458ddb79bddc794bee5c18bb9f.gif"
          width={500}
          alt=""
        />
      ) : (
        <div>
          <div className="container my-6 mx-auto px-4 md:px-12 rounded-xl">
            <p className="text-start font-bold text-2xl">All BookMarks</p>
            <div className="flex flex-wrap gap-4">
                {
                    bookmarks.map((el, idx) => <NewsLink fetchBookmarks={fetchBookmarks} el={el} key={idx}/>)
                }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default BookMarks;
