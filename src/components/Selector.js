import React from "react";
import styled from "styled-components";

const SelectorStyle = styled.div`
  .home_about_select{
    padding: 1em 0;
    position: relative;
    cursor: pointer;

    &::before{
      content: "";
      position: absolute;
      height: 1px;
      bottom: 0;
      width: 0;
      background: #341F87;
      transition: .3s;
    }
    &.overview,
    &.details,
    &.features,
    &.nearby{
      color: #341F87;
      &::before{
        width: 100%;
      }
    }
  }
`;

const Selector = ({
    children,
    name,
    TITLE,
    aboutClickHandler
                  }) => {
    return (
        <SelectorStyle>
            <div id ={`#${name}`}
                 className={`home_about_select ${TITLE}`}
                 onClick={() => aboutClickHandler()}>
                {children}
            </div>

    </SelectorStyle>
    );
}

export default Selector;