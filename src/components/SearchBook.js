import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const apiKey = process.env.REACT_APP_API_KEY;
const urlTitle = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({ searchedBook }) => {
  //   const [data, setData] = useState([]);
  console.log(searchedBook);

  const info = useFetch(
    `${urlTitle}inauthor:${searchedBook}&orderBy=relevance&key=${apiKey}`
  );
  // const searchedResult = () => {

  // }

  //   const searchByTitle = useFetch(
  //     `${urlTitle}inauthor:${searchedTitle}&orderBy=relevance&key=${apiKey}`
  //   );

  //   console.log(searchByTitle);

  //   const searchByAuthor = useFetch(
  //     `${urlTitle}inauthor:${searchedTitle}&orderBy=relevance&key=${apiKey}`
  //   );

  //   const searchByISBN = useFetch(
  //     `${urlTitle}isbn:${searchedTitle}&orderBy=relevance&key=${apiKey}`
  //   );

  console.log(info);

  return <div>Hola</div>;
};

export default SearchBook;
