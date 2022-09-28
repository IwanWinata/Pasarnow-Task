const SearchLink = ({el}) => {
  return (
    <div className="w-3/4 m-auto mt-8 text-start">
      <p className="text-xs text-black">
        {el.link}
      </p>

      <a href={el.link} className="text-lg text-blue-500 font-semibold">
        {el.title}
      </a>

      <p className="text-xs text-black">
       {el.description}
      </p>
    </div>
  );
};
export default SearchLink;
