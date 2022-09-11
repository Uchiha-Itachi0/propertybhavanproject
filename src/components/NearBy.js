import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Icons from "../assets/vectors";
import NearbyCard from "./NearbyCard";

const NearByStyle = styled.div`
  .nearby_card{
    margin: 1em 0;
    display: flex;
    gap: 4em;
  }
  @media only screen and (max-width: 740px){
    .nearby_card{
        flex-direction: column;
      align-items: center;
    }
  }
`;

const NearBy = () => {
    return (
        <NearByStyle>
            <Heading>Nearby</Heading>
            <div className="nearby_card">
                <NearbyCard icon={Icons.Hospital2}
                            text="Hospital"/>
                <NearbyCard icon={Icons.Cloud}
                            text="Park"/>
                <NearbyCard icon={Icons.Bus}
                            text="Bus"/>
                <NearbyCard icon={Icons.Hospital1}
                            text="Hospital"/>
                <NearbyCard icon={Icons.Gym}
                            text="Hospital"/>
            </div>
        </NearByStyle>
    )
}

export default NearBy;