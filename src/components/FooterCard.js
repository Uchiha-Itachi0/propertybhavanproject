import React from "react";
import styled from "styled-components";
import footerImage from "../assets/images/footerImage.png";
import Icons from "../assets/vectors";
import Button from "./Button";

const FooterCardStyle = styled.div`
  width: 33.3vw;
  padding: 1em;
  background: ${props => props.backgroundColor};
  border: 0.25px solid #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  cursor: pointer;
  transition: .3s;
  color: ${props => props.backgroundColor === "#fff" ? "#000" : "#fff"};
  svg{
    stroke: ${props => props.backgroundColor === "#fff" ? "#000" : "#fff"}!important;
  }
  &:hover{
    background: #9277FB;
    color: #fff;
  }
  
  .image_container{
    img{
      width: 100%;
    }
  }
  
  .footer_image_heading{
    margin: 1em 0;
    font-size: max(1.2vw, 1.2rem);
  }
  
  .footer_price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    margin-bottom: 2em;
    
    h1{
      font-size: max(1em, 1vw);
    }
    
    .footer_location{
      display: flex;
      gap: 1em;
      align-items: center;
      
      svg{
        width: 2vw;
        height: 2vw;
      }
      h1{
        font-size: max(1em, 1vw);
      }
    }
  }
  .footer_button{
    display: flex;
    flex-direction: column;
    gap: 1em;
    button{
      display: inline-block;
      width: 100%;
      cursor: pointer;
    }
  }
  
  @media only screen and (max-width: 980px){
    .footer_image_heading{
      text-align: center;
    }
    .footer_price{
      flex-direction: column;
      align-items: center;
      gap: .5em;
      .footer_location{
        gap: .1em;
      }
    }
  }
  
  @media only screen and (max-width: 740px){
    width: 80vw;
  }
  @media only screen and (max-width: 520px){
    .footer_price{
      .footer_location{
        svg{
          width: 5vw;
          height: 5vw;
        }
      }
    }
}
`;

const FooterCard = ({
    backgroundColor = "#fff"
                    }) => {
    return (
        <FooterCardStyle backgroundColor = {backgroundColor}>
            <div className="image_container">
                <img src={footerImage} alt="footerImage"/>
            </div>
            <h1 className="footer_image_heading">2BHK Apartment for Sale</h1>
            <div className="footer_price">
                <div className="footer_location">
                    {Icons.Location}
                    <h1>Behala</h1>
                </div>
                <h1>&#8377; 15, 000</h1>
            </div>

            <div className="footer_button">
                <Button>Contact Now</Button>
                <Button backgroundColor="#fff">Learn Now</Button>
            </div>
        </FooterCardStyle>
    )
}

export default FooterCard;