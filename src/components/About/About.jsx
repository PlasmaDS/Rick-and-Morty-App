import styled from "styled-components";
import about from "../../assets/images/about.jpg";

const Div = styled.div`
  align-self: center;
  text-align: left;
  border-radius: calc(var(--curve) * 1px);
  background: var(--theme-color);
  margin-top: 44px;
  width: 856px;
  height: 358px;
  padding-left: 30px;
  padding-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.65) 4.4px 4.4px 3.2px;
`;
const DImg = styled.img`
  position: fixed;
  top: 216px;
  right: 376px;
  border-radius: calc(var(--curve) * 1px);
  width: 300px;
`;
export default function About() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Div>
        <h2>Name: Bruno</h2>
        <h2>Status: Alive</h2>
        <h2>Specie: Human</h2>
        <h2>Gender: Male</h2>
        <h2>Origin: Eart</h2>
        <p style={{ color: "white" }}>
          Proyecto web basado en react, react-router-dom,
          <br /> style-components y redux
        </p>
        <DImg src={about} alt=""></DImg>
      </Div>
    </div>
  );
}
