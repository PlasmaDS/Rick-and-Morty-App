import bgImage from "../../assets/images/404_Error.jpg"; //Image credits: https://www.paulinesmcnaughton.com/daily-ui-008
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import access from "../../App.js";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100%;
  height: 100%;
`;
const ErrorImg = styled.img`
  position: absolute;
  top: 0px;
  left: 6%;
  max-width: -webkit-fill-available;
  max-height: -webkit-fill-available;
`;

const Link = styled(NavLink)`
  position: fixed;
  background-color: white;
  border-radius: 30px;
  width: 170px;
  height: 34px;
  border-style: solid;
  border-color: #bae886;
  border-width: thick;
  color: black;
  font-weight: 700;
  bottom: 4%;
  left: 45%;
  padding-top: 3px;
`;

export default function Error() {
  return (
    <div>
      <BackGround></BackGround>
      <ErrorImg src={bgImage} alt="img not found" />
      {!window.localStorage.getItem(access) ? (
        <Link to="/">Go to login</Link>
      ) : (
        <Link to="/home">Get me back home</Link>
      )}
    </div>
  );
}
