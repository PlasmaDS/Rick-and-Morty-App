import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import { Button } from "../SearchBar/SearchBar.jsx";

const Bar = styled.div`
  height: 7.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const Btns = styled(Button)`
  margin: 25px 0px;
  margin-right: 64px;
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
  function clearAccess() {
    window.localStorage.clear();
  }
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
        <Link to="/" onClick={clearAccess()}>
          Logout
        </Link>
      </Lnks>
    </Bar>
  );
}
