import NewsLink from "../components/NewsLink";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import url from "../constants/url";
import apiKey from "../constants/apiKey";
import apiHost from "../constants/apiHost";

const NewsResult = () => {
  const [searchParams] = useSearchParams();
  const [newsResult, setNewsResult] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(
        url + `/news/q=${searchParams.get("google")}`,
        {
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
          },
        }
      );
      setNewsResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      {!newsResult.feed ? (
        <img
          className="m-auto"
          src="https://i.pinimg.com/originals/75/9c/22/759c22458ddb79bddc794bee5c18bb9f.gif"
          width={500}
          alt=""
        />
      ) : (
        <div>
          <p className="font-bold md:text-2xl mt-6 sm:text-sm">{newsResult.feed.title}</p>
          <div className="container my-6 mx-auto px-4 md:px-12 rounded-xl">
            <p className="text-start font-bold text-2xl">Top News</p>
            <div className="flex flex-wrap gap-4">
              {
                newsResult.entries.map((el, idx) => <NewsLink fetchNews={fetchNews} el={el} key={idx}/>)
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NewsResult;
