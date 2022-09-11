import React from "react";
import styled from "styled-components";

const HeadingStyle = styled.h1`
  font-size: max(1.5rem, 2vw);
  color: #341F87;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
`;

const Heading = ({ children }) => {
    return (
        <HeadingStyle>{children}</HeadingStyle>
    )
}

export default Heading;