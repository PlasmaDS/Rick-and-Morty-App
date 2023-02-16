import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card.jsx";
import styled from "styled-components";
import { orderCards, filterCards } from "../../redux/actions/actions.js";

const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

const Selectors = styled.div`
  position: absolute;
  left: 45%;
  top: 176px;
`;

export function Favorites({ myFavorites }) {
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      return dispatch(orderCards(value));
    }
    if (name === "filter") {
      return dispatch(filterCards(value));
    }
  };

  return (
    <CardContainer>
      <Selectors>
        <select name="order" onClick={handleDispatch}>
          <option value="Ascendant">Low to High</option>
          <option value="Descendant">High to Low</option>
        </select>
        <select name="filter" onClick={handleDispatch}>
          <option value="Genderless">Genderless</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">unknown</option>
        </select>
      </Selectors>
      {myFavorites?.map((fav) => (
        <Card
          key={fav.name}
          name={fav.name}
          species={fav.species}
          gender={fav.gender}
          image={fav.image}
          id={fav.id}
        />
      ))}
    </CardContainer>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
