import React from "react";
import styled from "styled-components";

const NearbyCardStyle = styled.div`
  width: 6vw;
  padding: 1em;
  background: #352089;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 1em;
  font-size: max(1em, 1vw);

  svg{
    width: 5vw;
    height: 5vw;
  }
  
    @media only screen and (max-width: 740px){
        width: 40vw;
    }
`;

const NearbyCard = ({
    icon,
    text
                    }) => {
    return (
        <NearbyCardStyle>
            {icon}
            {text}
        </NearbyCardStyle>
    )
}

export default NearbyCard;