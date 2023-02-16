import Card from "../Card/Card";
import styled from "styled-components";

const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

export default function Cards(props) {
  const { characters } = props;
  return (
    <CardContainer>
      {characters.map((character) => (
        <Card
          key={character.name}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          onClose={() => props.onClose(character.id)}
        />
      ))}
    </CardContainer>
  );
}
