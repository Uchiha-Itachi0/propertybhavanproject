import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const OverviewStyle = styled.div`
    p{
      margin: 1em 0;
      width: 55vw;
      line-height: 1.2em;
      font-size: max(1rem, 1.2vw);
    }
  
  @media only screen and (max-width: 740px){
    p{
      width: 100%;
    }
  }
`;

const Overview = () => {
    return (
        <OverviewStyle>
            <Heading>Overview</Heading>
            <p>
                Property taxes are charged by local government entities, such as KMC, and are due by
                the owner of the property. The amount of KMC property tax that must be paid may
                vary. Thus, it depends on the location and a number of other criteria. KMC approved
                the new Unit Area Assessment (UAA) mechanism for calculating property taxes in
                March 2017.
            </p>
        </OverviewStyle>
    )
}

export default Overview;