import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 1em 2em;
  background: ${props => props.backgroundColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  border: none;
  color: ${props => props.backgroundColor === "#7F56D9" ? "#fff" : "#000"};
  font-weight: 600;
  font-size: max(.7em, 1.2vw);

`;

const Button = ({
    children,
    backgroundColor = "#7F56D9",
}) => {
    return (
        <ButtonStyle backgroundColor = {backgroundColor}>{children}</ButtonStyle>
    )
}

export default Button;
