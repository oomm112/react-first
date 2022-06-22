import React from 'react';

const NaverMovie = () => {
  const headers = {
    'X-Naver-Client-Id': '',
    'X-Naver-Client-Secret': '',
    'Content-type': 'application/json'
  };

  const params = {
    'query':'test'
  }

  const url = 'https://openapi.naver.com/v1/search/movie.json?query=a';

  const fetchMoviesHandler = () => {
    console.log(`{headrs}`);
    fetch(url, {
      method: "GET",
      headers: {headers},
    }).then(response => {
      console.log(response);
      return response.json();
    });
  };

  return(
    <>
      <button onClick={fetchMoviesHandler}>Get</button>
    </>
  );
};

export default NaverMovie;
