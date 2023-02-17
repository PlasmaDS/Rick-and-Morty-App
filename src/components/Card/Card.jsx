import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const ListItem = styled.li`
  margin-bottom: 3em;
`;

const CardContainer = styled.div`
  position: relative;
  display: block;
  height: 117%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  border-style: solid;
  border-color: white;
  :hover > div {
    transform: translateY(0);
  }
  @keyframes append-animate {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  animation: append-animate 2s linear;
  box-shadow: rgba(0, 0, 0, 0.65) 4.4px 4.4px 3.2px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  user-select: none;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: (var(--curve) * 1px);
  background-color: var(--surface-color);
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`;

const ButtonHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

const CardHeader = styled.div`
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

const CardArc = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
  & > path {
    fill: var(--surface-color);
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
  }
`;

const CardTitle = styled.h1`
  font-size: 18px;
  padding: 24px;
  margin: -24px;
  color: #6a515e;
  user-select: none;
`;

const CardDescription = styled.div`
  position: absolute;
  top: -15px;
  left: 10%;
  padding: 0 2em 2em;
  margin: 0;
  font-size: smaller;
  text-align: initial;
  color: black;
  font-family: emoji;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  user-select: none;
`;

const CloseButton = styled.button`
  position: absolute;
  left 380%;
  background-color: rgba(255,255,255);
  opacity: 30%;
  border: none;
  border-radius: 100%;
  margin: 10px;
  padding: 5px 9px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  &:hover {
    opacity: 60% !important;
    color: red;
  }
`;

const CommonHeart = css`
  position: absolute;
  z-index: 999;
  left: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: larger;
`;

const HeartW = styled.button`
  ${CommonHeart}
  color: transparent;
  text-shadow: 0px 0px 1px rgba(204, 208, 211, 0.6);
  :hover {
    text-shadow: 0px 0px 1px rgba(220, 190, 190, 0.8);
  }
`;

const HeartR = styled.button`
  ${CommonHeart}
  text-shadow: 0px 0px 2px red;
`;

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

  return (
    <ListItem>
      <CardContainer>
        {isFav ? (
          <HeartR onClick={handleFavorite}>❤️</HeartR>
        ) : (
          <HeartW onClick={handleFavorite}>🤍</HeartW>
        )}
        <ButtonHeader>
          <CloseButton onClick={props.onClose}>X</CloseButton>
        </ButtonHeader>
        <Image src={props.image} alt="img not found" />
        {/* <Image src={back} alt="img not found" /> */}
        <CardOverlay>
          <CardHeader>
            <CardArc xmlns="http://www.w3.org/2000/svg">
              <path />
            </CardArc>
            <div>
              <Link to={`/detail/${props.id}`}>
                <CardTitle>{props.name}</CardTitle>
              </Link>
            </div>
          </CardHeader>
          <CardDescription>
            <h2>{props.species}</h2>
            {props.gender === "Genderless" && (
              <h2 style={{ color: "#ffd080" }}>{props.gender}</h2>
            )}
            {props.gender === "Female" && (
              <h2 style={{ color: "pink" }}>{props.gender}</h2>
            )}
            {props.gender === "Male" && (
              <h2 style={{ color: "cornflowerblue" }}>{props.gender}</h2>
            )}
            {props.gender === "unknown" && (
              <h2 style={{ color: "grey" }}>{props.gender}</h2>
            )}
          </CardDescription>
        </CardOverlay>
      </CardContainer>
    </ListItem>
  );
}

//Código que evita arrastrar los elementos de la card
document.addEventListener("dragstart", function (evt) {
  if (
    evt.target.tagName === "IMG" ||
    evt.target.tagName === "DIV" ||
    evt.target.tagName === "UL" ||
    evt.target.tagName === "LI" ||
    evt.target.tagName === "A" ||
    evt.target.tagName === "SVG"
  ) {
    evt.preventDefault();
  }
});

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (fav) {
      dispatch(addFavorite(fav));
    },
    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
