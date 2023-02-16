import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

const Bar = styled.div`
  height: 7.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const Btns = styled.button`
  background-color: #c0ffc0;
  color: var(--theme-color);
  border: 0px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  margin: 25px 0px 25px 0px;
  margin-right: 15px;
  cursor: pointer;
`;

const Lnks = styled(Bar)`
  justify-content: space-between;
`;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  width: 300px;
  top: 10px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: #c0ffc0;
  padding: 10px;
  margin: 0px 15px;
  background-color: transparent;
  :hover {
    color: var(--theme-color);
    background-color: #c0ffc0;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default function NavBar({ onSearch, random }) {
  return (
    <Bar>
      <NavLink to="/home">
        <Logo src={logo} alt="img not found" />
      </NavLink>
      <Lnks>
        <SearchBar onSearch={onSearch} />
        <Btns onClick={random}>Random</Btns>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        {/* logout without function */}
        <Link to="/">Logout</Link>
      </Lnks>
    </Bar>
  );
}
