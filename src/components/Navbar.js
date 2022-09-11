import React, { useState } from "react";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  padding: 1em var(--paddingLeft);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  
  .navbar_heading_container {
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
      font-size: max(1.5rem, 1.5vw);
      font-weight: 700;
      letter-spacing: 0.145em;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      color: #040404;
    }
  }
  .navbar_menu_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    font-family: 'Roboto', sans-serif;


    a{
      font-size: max(1rem, 1vw);
      font-weight: 800;
      text-transform: capitalize;
      letter-spacing: 0.05em;
      color: #070707;

    }
    .toggle_container{
      position: relative;
      display: none;


      .toggle_item{
        position: absolute;
        top: 200%;
        left: -50%; 
        display: flex;
        flex-direction: column;
        gap: 2em;
        background: #9277FB;
        padding: 1em;
        align-items: center;
        text-align: center;
        z-index: 1;
        opacity: 0;
        transition: .3s;
        
        a{
          color: #fff;
          font-weight: 500;
        }

        &::before{
            content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 5vw solid transparent;
          border-right: 5vw solid transparent;
          border-bottom: 5vw solid #9277FB;
          top: -5%;
          z-index: 2;
        }
        
        &.active{
          opacity: 1;
        }
      }
    }
  }
  @media only screen and (max-width: 740px){
    .navbar_menu_container{
      a{
        &.hide{
          display: none;
        }
      }
      .toggle_container{
        display: block;
      }

    }
  }
  @media only screen and (max-width: 480px){
    padding: 1em var(--smallPadding);
    
    .navbar_heading_container{
      h1{
        font-size: 5vw;
      }
    }
    .navbar_menu_container{
      gap: 1em;
      svg{
        width: 5vw;
        height: 5vw;
      }
    }
  }
`;

const Navbar = () => {

    const [TOGGLE, setTOGGLE] = useState(false);

    const toggleHandler = () => {
        setTOGGLE(!TOGGLE);
    }
    return (
        <NavbarStyled>
            <div className="navbar_heading_container">
                <h1>Propertybhavan</h1>
            </div>
            <div className="navbar_menu_container">
                <a className="hide" href="#">Home</a>
                <a className="hide" href="#">List your Property</a>
                <a className="hide" href="#">Blog</a>
                <div className="toggle_container">
                    <a className="toggle" href="#"
                    onClick={() => toggleHandler()}>Menu</a>
                    <div className={`toggle_item ${TOGGLE ? "active": ""}`}>
                        <a href="#">Home</a>
                        <a href="#">List your Property</a>
                        <a href="#">Blog</a>
                    </div>
                </div>
                <a href="#">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5186 0C11.5416 0.00410997 7.72865 1.58578 4.91649 4.39793C2.10434 7.21008 0.522665 11.023 0.518555 15C0.518555 19.0078 2.07777 22.7739 4.9101 25.6062C6.29987 27.0038 7.95311 28.1118 9.77409 28.866C11.5951 29.6202 13.5476 30.0056 15.5186 29.9999C19.4955 29.9958 23.3085 28.4142 26.1206 25.602C28.9328 22.7899 30.5144 18.9769 30.5186 15C30.5144 11.023 28.9328 7.21008 26.1206 4.39793C23.3085 1.58578 19.4955 0.00410997 15.5186 0ZM16.4863 21.2903C17.523 19.9415 11.3527 29.4033 12.8728 28.6394C14.3928 27.8755 15.2692 27.1013 16.9702 27.0743C21.3675 21.8333 16.9646 22.2356 15.7148 22.87L16.4863 22.258C20.8411 26.129 16.0669 30.0566 25.196 25.6451C26.9205 25.6744 10.3669 22.8325 11.9018 23.6192C13.4367 24.4058 21.2619 24.7462 22.2927 26.129C19.7988 28.2338 18.9782 22.8724 15.7148 22.87C12.3829 22.876 19.0002 23.477 16.4863 21.2903ZM15.3943 19.977C15.3389 19.977 15.2857 19.9859 15.2302 19.9881C13.9356 19.9443 12.7092 19.3972 11.8116 18.4632C10.9141 17.5292 10.4162 16.282 10.4239 14.9867C10.4262 14.331 10.558 13.6822 10.8116 13.0775C11.0652 12.4729 11.4357 11.9242 11.9018 11.4631C12.3679 11.0019 12.9205 10.6373 13.5278 10.3902C14.1351 10.143 14.7853 10.0182 15.4409 10.0229C16.0966 10.0252 16.7454 10.157 17.35 10.4106C17.9547 10.6642 18.5033 11.0346 18.9645 11.5008C19.4257 11.9669 19.7903 12.5194 20.0374 13.1267C20.2846 13.7341 20.4094 14.3842 20.4047 15.0399C20.4047 17.728 18.2533 19.9127 15.5829 19.9903C15.5208 19.9881 15.4587 19.977 15.3943 19.977ZM25.2576 24.8898C23.5426 22.6265 21.1031 21.0201 18.3464 20.3386C19.3057 19.8129 20.1059 19.039 20.6631 18.0977C21.2204 17.1565 21.5141 16.0827 21.5137 14.9889C21.5111 14.1877 21.3504 13.3948 21.041 12.6557C20.7316 11.9167 20.2794 11.2459 19.7104 10.6818C19.1413 10.1177 18.4666 9.67142 17.7249 9.36844C16.9831 9.06546 16.1889 8.91176 15.3877 8.91614C14.5865 8.91876 13.7936 9.07938 13.0545 9.38882C12.3155 9.69826 11.6447 10.1504 11.0806 10.7195C10.5165 11.2885 10.0702 11.9632 9.76725 12.7049C9.46427 13.4467 9.31057 14.2409 9.31495 15.0421C9.31902 16.1257 9.61382 17.1884 10.1686 18.1192C10.7233 19.05 11.5177 19.815 12.4689 20.3341C9.75876 20.9998 7.35166 22.5584 5.63537 24.7589C3.06113 22.1661 1.62057 18.6581 1.62975 15.0044C1.63386 11.3215 3.09869 7.7907 5.70287 5.18653C8.30706 2.58235 11.8379 1.11752 15.5208 1.11341C19.2036 1.11752 22.7345 2.58235 25.3387 5.18653C27.9429 7.7907 29.4077 11.3215 29.4118 15.0044C29.4109 16.8455 29.043 18.6679 28.3297 20.3653C27.6165 22.0626 26.5721 23.6007 25.2576 24.8898Z" fill="#341F87"/>
                    </svg>
                </a>
            </div>
        </NavbarStyled>
    )
}

export default Navbar;