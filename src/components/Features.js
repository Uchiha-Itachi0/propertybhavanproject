import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Icons from "../assets/vectors";

const FeaturesStyle = styled.div`
  .features_container{
    margin: 1em 0;
    display: flex;
    gap: 7em;
    
    .features{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
        h1{
          font-size: max(1rem, 1.2vw);
          font-weight: 600;
        }
    }
  }
  @media only screen and (max-width: 740px){
    .features_container{
      align-items: center;
      justify-content: center;
}
  }
  
  @media only screen and (max-width: 520px){
    .features_container{
      flex-direction: column;
      gap: 1em;
    }
  }
`;

const Features = () => {
    return (
        <FeaturesStyle>
            <Heading>Features & Amenities</Heading>
            <div className="features_container">
                <div className="features">
                    {Icons.CheckCircle}
                    <h1>CCTV</h1>
                </div>
                <div className="features">
                    {Icons.CheckCircle}
                    <h1>Security</h1>
                </div>
                <div className="features">
                    {Icons.CheckCircle}
                    <h1>Life</h1>
                </div>
            </div>
        </FeaturesStyle>
    )
}

export default Features;