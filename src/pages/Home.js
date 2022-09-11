import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Image1 from "../assets/images/image1.png";
import Overview from "../components/Overview";
import Details from "../components/Details";
import Features from "../components/Features";
import NearBy from "../components/NearBy";
import Heading from "../components/Heading";
import FooterCard from "../components/FooterCard";
import Slider from "../components/Slider";
import Icons from "../assets/vectors";
const HomeStyle = styled.div`
    .home{
      padding: 1em var(--paddingLeft);
      
      .home_heading{
        color: #050505;
        font-size: max(1.5em, 2vw);
        font-weight: 600;
        margin: .6em 0;
      }
      
      .slider{
        display: none;
      }
      
      .home_image_container{
        width: 100%;
        height: 30vw;
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin-bottom: 1em;
        
        .home_image_container_image_1{
          width: 50%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .home_image_container_image_2{
        width: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: .5em;
        
        .home_image_container_image_2_images{
          width: 49%;
          height: 49%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .home_image_footer_button_container{
        display: flex;
        justify-content: flex-end;
        
        .home_image_footer_button{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2em;
          
          .button1, .button2, .button3{
            cursor: pointer;
            svg{
              width: 5vw;
              height: 5vw;
            }
          }
        }
      }
      
      .home_price_container{
        display: flex;
        justify-content: space-between;
        
        .home_price{
          .home_price_amount{
            font-size: max(1.5em, 2vw);
            margin-bottom: .4em;
            color: #341F87;
          }
          .home_price_text{
            font-size: max(.7em, 1.2vw);
          }
        }
        
        .home_price_contact{
          display: flex;
          align-items: center;
          
          .home_price_contact_whatsapp{
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
              width: 4.5vw;
              height: 4.5vw;
            }
          }
          
          .home_price_contact_call{
            button{
              padding: .8em 6em;  
            }
          }
        }
      }
      
      .home_about_container{
        margin: 1em 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        font-size: max(.7em, 1.2vw);
        
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
          &.select{
            color: #341F87;
            &::before{
              width: 100%;
            }
          }
        }
      }
      
      .footer{
        margin-top: 6em;
      }
      
      .footer_container{
        margin: 1em 0;
        display: flex;
        gap: 2em;
      }
      
      .footer_dot{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        margin: 7em 0;
        
      }
    }
  
  @media only screen and (max-width: 980px){
    .home{
      .slider{
        display: block;
      }
      .home_image_container{
        display: none;
      }
      .home_price_container{
        flex-direction: column;
        gap: 2em;
      }
    }
    }
  
  @media only screen and (max-width: 740px){
    .home{
      
      .home_image_footer_button_container{
        flex-direction: column;
        
        .home_image_footer_button{
          .button1, .button2, .button3{
            svg{
              width: 8vw;
              height: 8vw;
            }

          }
        }
      }
      
      .home_price_container{
        justify-content: center;
        align-items: center;
        text-align: center;
        
        .home_price_contact{
            flex-direction: column;
          
          .home_price_contact_whatsapp{
            svg{
              width: 8vw;
              height: 8vw;
            }
          }
        }
      }
      
      .about_display{
        text-align: center;
      }
      .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .footer_container{
        flex-direction: column;
      }
    }
  }
  @media only screen and (max-width: 480px){
    .home{
      padding: 1em var(--smallPadding);
    }
  }

`;

const Home = () => {
    const [TITLE, SET_TITLE] = useState("#overview");

    const aboutClickHandler = (e) => {
        const title = e.currentTarget.id;
        SET_TITLE(title);
    }

    return (
        <HomeStyle homeImage = {Image1} width = {20}>
            <Navbar />
            <div className="home">
                <div className="home_button">
                    <Button>For Rent</Button>
                </div>
                <div className="home_heading">
                    <h1>2BHK Apartment for Sale in Newtown, Kolkata, West Bengal </h1>
                </div>
                <div className="slider">
                    <Slider />
                </div>
                <div className="home_image_container">
                    <div className="home_image_container_image_1">
                        <img src={Image1} alt="image1" />
                    </div>
                    <div className="home_image_container_image_2">
                        <div className="home_image_container_image_2_images">
                            <img src={Image1} alt="Image1"/>
                        </div>
                        <div className="home_image_container_image_2_images">
                            <img src={Image1} alt="Image1"/>
                        </div>
                        <div className="home_image_container_image_2_images">
                            <img src={Image1} alt="Image1"/>
                        </div>
                        <div className="home_image_container_image_2_images">
                            <img src={Image1} alt="Image1"/>
                        </div>
                    </div>
                </div>

                <div className="home_image_footer_button_container">
                    <div className="home_image_footer_button">
                        <div className="button1">
                            {Icons.Button1}

                        </div>
                        <div className="button2">
                            {Icons.Button2}

                        </div>
                        <div className="button3">
                            {Icons.Button3}
                        </div>
                    </div>
                </div>

                <div className="home_price_container">
                    <div className="home_price">
                        <h1 className="home_price_amount">&#8377; 25,000</h1>
                        <h1 className="home_price_text">SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India</h1>
                    </div>
                    <div className="home_price_contact">
                        <div className="home_price_contact_whatsapp">
                            {Icons.Whatsapp}
                        </div>
                        <div className="home_price_contact_call">
                            <Button>Contact Owner</Button>
                        </div>
                    </div>
                </div>

                <div className="home_about_container">
                    <div id = "#overview" className={`home_about_select ${TITLE === '#overview' ? "select" : ""}`}
                    onClick={(e) => aboutClickHandler(e)}>
                        Overview
                    </div>
                    <div id = "#details" className={`home_about_select ${TITLE === '#details' ? "select" : ""}`}
                         onClick={(e) => aboutClickHandler(e)}>
                        Details
                    </div>
                    <div id = "#features" className={`home_about_select ${TITLE === '#features' ? "select" : ""}`}
                         onClick={(e) => aboutClickHandler(e)}>
                        Features & Amenities
                    </div>
                    <div id = "#nearby" className={`home_about_select ${TITLE === '#nearby' ? "select" : ""}`}
                         onClick={(e) => aboutClickHandler(e)}>
                        Nearby
                    </div>
                </div>

                <div className="about_display">
                    {TITLE === '#overview' && <Overview/>}
                    {TITLE === '#details' && <Details/>}
                    {TITLE === '#features' && <Features />}
                    {TITLE === '#nearby' && <NearBy />}
                </div>

                <div className="footer">
                    <Heading>Similar Properties</Heading>
                    <div className="footer_container">
                        <FooterCard />
                        <FooterCard backgroundColor = "#4B2FB7" />
                        <FooterCard backgroundColor = "#4B2FB7" />
                    </div>
                </div>

                <div className="footer_dot">
                    {Icons.Circle}
                    {Icons.Circle}
                    {Icons.Circle}
                </div>
            </div>
        </HomeStyle>

    )
}

export default Home;