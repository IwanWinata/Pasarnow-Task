import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import url from "../constants/url";
import apiKey from "../constants/apiKey";
import apiHost from "../constants/apiHost";

const ImageResult = () => {
  const [searchParams] = useSearchParams();
  const [imageResult, setImageResult] = useState([]);

  const fetchImage = async () => {
    try {
      const { data } = await axios.get(
        url + `/image/q=${searchParams.get("google")}`,
        {
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
          },
        }
      );
      setImageResult(data.image_results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <>
      {imageResult.length === 0 ? (
        <img
          className="m-auto"
          src="https://i.pinimg.com/originals/75/9c/22/759c22458ddb79bddc794bee5c18bb9f.gif"
          width={500}
          alt=""
        />
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12 rounded-xl">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-4">
            {imageResult.map((el, idx) => (
                <a href={el.link.href} key={idx}>
                    <img
                      src={el.image.src}
                      width={350}
                      alt=""
                    />
                </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default ImageResult;
