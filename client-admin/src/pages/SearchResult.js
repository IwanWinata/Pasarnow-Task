import SearchLink from "../components/SearchLink";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import url from "../constants/url";
import apiKey from "../constants/apiKey";
import apiHost from "../constants/apiHost";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        url + `/search/q=${searchParams.get("google")}`,
        {
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
          },
        }
      );
      setSearchResult(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);
  return (
    <div className="mt-4 mb-8">
      {searchResult.length === 0 ? (
        <img
          className="m-auto"
          src="https://i.pinimg.com/originals/75/9c/22/759c22458ddb79bddc794bee5c18bb9f.gif"
          width={500}
          alt=""
        />
      ) : (
        searchResult.map(el => <SearchLink el={el} key={el.title}/>)
      )}
    </div>
  );
};
export default SearchResult;
