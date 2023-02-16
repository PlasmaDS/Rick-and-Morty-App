import { useState } from "react";
import validation from "./validation.js";
import styled, { css } from "styled-components";
import show from "../../assets/images/eye.svg";
import hide from "../../assets/images/eye-slash.svg";

const ShowHide = styled.label`
  position: relative;
  top: -32px;
  left: 290px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 85px;
  text-align: left;
`;

const Div = styled.div`
  width: 400px;
  border-style: solid;
  border-radius: 10px;
  background: var(--theme-color);
  padding: 20px 40px;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  font-size: 14px;
  height: 28px;
  border-radius: 4px;
  border-width: 1px;
  &:focus {
    outline: 2px solid black;
  }
  margin-bottom: 11px;
  margin-top: 4px;
`;

const CommonButton = css`
  width: -webkit-fill-available;
  font-weight: 700;
  border: none;
  font-size: 14px;
  height: 28px;
  border-radius: 4px;
  margin-bottom: 18px;
  margin-top: -4px;
`;

const ButtonL = styled.button`
  ${CommonButton}
  background: #1877f2;
  &:hover {
    background: #166fe5;
  }
`;

const ButtonS = styled(ButtonL)`
  ${CommonButton}
  background: #42b72a;
  &:hover {
    background: #36a420;
  }
`;

const Label = styled.label`
  color: white;
`;

const A = styled.a`
  position: relative;
  left: 86px;
`;

const ErrorL = styled.p`
  color: orange;
  margin-top: auto;
`;
const ErrorS = styled.p`
  color: orange;
  margin-top: -22px;
`;

export default function Login(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [userSData, setUserSData] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUpChange = (e) => {
    setUserSData({
      ...userSData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userSData,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  const [errors, setErrors] = useState({ username: "", password: "" });

  //Show pass code start (si la contraseña es correcta)
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  //Show pass code end

  // Singup start
  const [signup, setSignup] = useState({ checked: false });

  const handleChange = () => {
    !signup.checked
      ? setSignup({ checked: true })
      : setSignup({ checked: false });
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    props.signup(userData);
  };
  // Signup end

  return (
    <Container>
      <Div>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username:</Label>
          <br />
          <Input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={userData.username}
            placeholder="example@mail.com"
          />
          <br />
          <Label htmlFor="password">Password:</Label>
          <br />
          <Input
            type={passwordType}
            name="password"
            onChange={handleInputChange}
            value={userData.password}
            placeholder="Enter your password"
          />
          <ShowHide onClick={togglePassword}>
            {passwordType === "password" ? (
              <img src={show} alt="img not found" />
            ) : (
              <img src={hide} alt="img not found" />
            )}
          </ShowHide>
          <br />
          <ButtonL type="submit" showpassword="true">
            Log In
          </ButtonL>
        </form>
        {/* Singup start */}
        {/* eslint-disable-next-line */}
        <A href="#" onClick={handleChange}>
          Create New Account
        </A>
        {signup.checked && (
          <form onSubmit={handleSignupSubmit}>
            <Label htmlFor="username">Username:</Label>
            <br />
            <Input
              type="text"
              name="username"
              onChange={handleSignUpChange}
              value={userSData.username}
              placeholder="example@mail.com"
            />
            {errors.username && <ErrorL>{errors.username}</ErrorL>}
            <br />
            <Label htmlFor="password">Password:</Label>
            <br />
            <Input
              type={passwordType}
              name="password"
              onChange={handleSignUpChange}
              value={userSData.password}
              placeholder="Enter your password"
            />
            <ShowHide htmlFor="password" onClick={togglePassword}>
              {passwordType === "password" ? (
                <img src={show} alt="img not found" />
              ) : (
                <img src={hide} alt="img not found" />
              )}
            </ShowHide>
            {errors.password && <ErrorS>{errors.password}</ErrorS>}
            <br />
            <ButtonS type="submit" showpassword="true">
              Sign Up
            </ButtonS>
          </form>
        )}
        {/* Signup end */}
      </Div>
    </Container>
  );
}
