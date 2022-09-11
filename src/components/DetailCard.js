import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const DetailCardStyle = styled.div`
  width: 25vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background: #FEFEFF;
  border: 1px solid #341F87;
  box-shadow: 0 4px 4px rgba(134, 104, 253, 0.2);
  border-radius: 13px;
  
  .display_text{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    h1{
        font-size: max(1rem, 1.5vw);
      
      &:nth-child(2){
        font-size: max(0.8rem, 1vw);
        color: #000;
      }
    }
  }
`;

const DetailCard = ({
    icon,
    heading = "Heading",
    subHeading = "Sub Heading",
                    }) => {
    return (
        <DetailCardStyle>
            <div className="display_icon">
                {icon}
            </div>
            <div className="display_text">
                <Heading>{heading}</Heading>
                <Heading>{subHeading}</Heading>
            </div>
        </DetailCardStyle>
    )
}

export default DetailCard;