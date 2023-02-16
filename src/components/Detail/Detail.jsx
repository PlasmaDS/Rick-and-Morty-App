import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailCard = styled.div`
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
  position: absolute;
  right: 358px;
  top: 228px;
  border-radius: calc(var(--curve) * 1px);
`;

const RHome = styled.button`
  background-color: #3c8d15;
  border-color: #04aa6d;
  color: black;
  font-weight: bold;
  font-size: 18px;
  font-family: "Source Sans Pro", sans-serif;
  padding-left: 19px;
  padding-right: 19px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  :hover {
    background-color: #51b520;
  }
`;

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DetailCard>
        <h2>Name: {character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        {/* Si no existe origin.name no se muestra el origen */}
        <h2>Origin: {character.origin?.name}</h2>
        <DImg src={character.image} alt=""></DImg>
        <Link to="/home">
          <RHome>❮ Return to home page</RHome>
        </Link>
      </DetailCard>
    </div>
  );
}
