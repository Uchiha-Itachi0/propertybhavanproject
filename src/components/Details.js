import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import DetailCard from "./DetailCard";
import Icons from "../assets/vectors";

const DetailStyle = styled.div`
  .detail_cards{
    display: flex;
    gap: 2em;
    margin: 1em 0;
  }
  @media only screen and (max-width: 740px){
    .detail_cards{
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Details = () => {
    return (
        <DetailStyle>
            <Heading>Details</Heading>
            <div className="detail_cards">
                <DetailCard icon={Icons.Bed}
                heading="BHK" subHeading="3BHK"/>
                <DetailCard icon={Icons.Bath}
                            heading="Bathroom" subHeading="2"/>
                <DetailCard icon={Icons.DoubleBed}
                            heading="Furnishing Status" subHeading="Semi-Furnished"/>
                <DetailCard icon={Icons.Expand}
                            heading="Super Build Area" subHeading="1418 Sq.ft"/>
            </div>
        </DetailStyle>
    )
}

export default Details;