import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

function Header() {
  return(
      <>
        <header>
          <ul>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/study">study</Link>
              </li>
              <li>
                <Link to="/part1">part1</Link>
              </li>
              <li>
                <Link to="/part2">part2</Link>
              </li>
              <li>
                <Link to="/part3">part3</Link>
              </li>
              <li>
                <Link to="/part4">part4</Link>
              </li>
              <li>
                <Link to="/reactMeal">ReactMeal</Link>
              </li>
              <li>
                <Link to="/naverMovie">NaverMovie</Link>
              </li>
          </ul>
        </header>
        <hr/>
      </>
  );
}

export default Header;
