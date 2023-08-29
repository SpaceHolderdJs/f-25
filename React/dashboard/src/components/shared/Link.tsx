import { Link } from "react-router-dom";
import {Link as ScrollLink} from "react-use-scroll-to";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 10px;
  font-size: 30px;
  text-decoration: none;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  transition: 0.3s all;

  &:hover {
    color: black;
  }
`;

export const StyledScrollLink = styled(ScrollLink)`
  color: white;
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;