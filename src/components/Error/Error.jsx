import bgImage from "../../assets/images/404_Error.jpg"; //Image credits: https://www.paulinesmcnaughton.com/daily-ui-008
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export default function Error() {
  return (
    <div>
      <BackGround></BackGround>
      <ErrorImg src={bgImage} alt="img not found" />
      <NavLink
        style={{
          position: "fixed",
          backgroundColor: "white",
          borderRadius: "30px",
          width: "170px",
          height: "34px",
          borderStyle: "solid",
          borderColor: "#bae886",
          borderWidth: "thick",
          textDecoration: "none",
          color: "black",
          fontWeight: "700",
          bottom: "4%",
          left: "45%",
          paddingTop: "3px",
        }}
        to="/home">
        Get me back home
      </NavLink>
    </div>
  );
}
