import { useState } from "react";
import styled from "styled-components";

const Inpt = styled.input`
  width: 400px;
  margin-right: 7px;
  padding: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #c0ffc0;
  color: var(--theme-color);
  border: 0px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  margin: 25px 15px 25px 0px;
  cursor: pointer;
`;

export default function SearchBar({ onSearch }) {
  const [character, setCaracter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCaracter(value);
  };

  return (
    <div>
      <Inpt type="search" placeholder="Number..." onChange={handleChange} />
      <Button onClick={() => onSearch(character)}>Add</Button>
    </div>
  );
}
