import React, { useContext, useState } from 'react';
import { LoginContext, ScrollContext } from '../state/context';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from "react-netlify-identity";
import { FaUser, FaBars , FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assests/logo.svg';
import Modal from './modal'

const Navbar = () => {
    const UseLoginContext = useContext(LoginContext)
    const [isMobile, setIsMobile] = useState(false)
    const UseScrollContext = useContext(ScrollContext)
    const { isLoggedIn } = useIdentityContext()
    const onClicked = (value) => {
        UseLoginContext.dispatch({ type: 'open', payload: value  })
        setIsMobile(false)

    }
    return (
        <Container scroll={UseScrollContext.state.scrollTop} height={UseScrollContext.state.scrollHeight}>
            <Logo className='actions' isInactive={UseLoginContext.state.inactive}>
                <p>PrizeMi</p>
                <Hamburger className='actions' ><FaBars onClick={() => setIsMobile(!isMobile)} /></Hamburger>
            </Logo >
            <Actions className='actions' isInactive={UseLoginContext.state.inactive} mobile={isMobile}>
                <NavLink to='/home' >Home</NavLink>
                <NavLink to='/features' className='alternate'>Features</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/contact' className='alternate' >Feedback</NavLink>
            </Actions>
            <Button mobile={isMobile} isInactive={UseLoginContext.state.inactive} onClick={() => onClicked('Signup on PrizeMi') }>Sign Up</Button>
            {!isLoggedIn  && <Button2 mobile={isMobile} className='login' isInactive={UseLoginContext.state.inactive} onClick={() => onClicked('Login to Prizemi')}><span>Log In </span><FaArrowRight/></Button2>}
            {isLoggedIn && <User><FaUser /></User>}
            {/* <Button onClick={logoutUser}>Log Out</Button>} */}
            {UseLoginContext.state.isModalOpen && <Modal />}

            {/* <Icon>

        {isLoggedIn && user &&
          <div>
            <span>
              Hello {user.user_metadata.full_name.split(' ')[0]}</span>
            <button onClick={logoutUser}>Logout</button>
          </div>}
      </Icon> */}
        </Container>
    )
}

export default Navbar

const Container = styled.div<{ scroll: number, height: number }>`
 ${props => (props.scroll > props.height / 52 ? `margin-top: 0%` : `margin-top:5%`)};
  ${props => (props.scroll > props.height / 52 ? `position: fixed` : `position:absolute`)};
  ${props => (props.scroll > props.height / 52 && `background-color: #6554C0`)};
  ${props => (props.scroll > props.height / 52 && `box-shadow: -1px 3px 5px -1px rgba(0,0,0,0.3)`)};
${props => (props.scroll > props.height / 4.5 && `background-color:#ffffff`)};
${props => (props.scroll > props.height / 2.1 && `background-color:#091E42`)};
  opacity:1;
    height:10vh;
    z-index:4;
    width:100%;
    display:flex;
    justify-content:center;
    .actions{
        a ,p, svg{
            color: #091E42;
            ${props => (props.scroll > props.height / 2.1 && `color:#ffffff`)};
        } 
    }
    @media(max-width:500px){
        display:flex;
        flex-direction:column;

    }
`
const Logo = styled.div<{ isInactive: boolean }>`
    display:flex;
    z-index:6;
    justify-content:space-evenly;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    align-items:center;
    width:25%;
    margin-left:10%;
    height:100%;
    @media(max-width:500px){
        margin-left:0;
        width:100%;
    }
    img{
        width:25%;
        height:100%;
        z-index:6;
    }
    p{  z-index:6;
        font-size:2rem;
        font-weight:bold;
        @media(max-width:500px){
            width:90%;
            text-align:center;
        }

    }
`;
const Actions = styled.div<{ isInactive: boolean, mobile: boolean }>`
    display:flex;
    justify-content:space-evenly;
    width:30%;
    margin-left:10%;
    align-items:center;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    font-weight:bold;
    font-size:1.2rem;
    a{  
        text-decoration:none;
    }
    @media(max-width:500px){
    ${props => (props.mobile ? `flex-direction: column ` : `display:none`)};
    width:90%;
    height:56.8vh;
    margin-left:0;
    position:fixed;
    align-items:flex-start;
    margin:0 5%;
    top:14.8vh;
    background-color:#ffffff;
    a{
        width:100%;
        height:14.2vh;
        padding-left:10%;
        display:flex;
        align-items:center;
      
    }
    .alternate{
        background-color:#f2f2f2;
    }
    }
`;

const Hamburger = styled.div`
display:none;
@media(max-width:500px){
display:flex;
align-items:center;
font-size:1.5rem;
margin-right:5%;

}
`;
const Button = styled.button<{ isInactive?: boolean, mobile: boolean }>`
    outline:none;
    margin-top:1.5%;
    margin-right:20%;
    border:none;
    display:flex;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    font-weight:bold;
    font-size:1rem;
    width:8%;
    color: #091E42;
    border-radius:5px;
    height:50%;
    background-color:#ffffff;
    z-index:6;
    @media(max-width:500px){
        width:90%;
        ${props => (props.mobile ? `flex-direction: column ` : `display:none`)};
        position:fixed;
        height:14.2vh;
        top:71.6vh;
        justify-content:center;
        margin:0 5%;
        font-size:1.2rem;
        padding-left:10%;
        border-radius:0;
      
    }
    
`;
const Button2 = styled.button<{ isInactive?: boolean, mobile: boolean }>`
    display:none;
    @media(max-width:500px){
        ${props => (props.mobile ? `display: flex `:`display:none`)};
        ${props => (props.isInactive && `pointer-events: none`)};
        ${props => (props.isInactive && `opacity: 0.7`)};
        flex-direction:row;
        outline:none;
        border:none;
        font-weight:bold;
        color: #ffffff;
        border-radius:5px;
        width:90%;
        position:fixed;
        height:14.2vh;
        top:85.8vh;
        align-items:center;
        margin:0 5%;
        font-size:1.2rem;
        padding-left:10%;
        border-radius:0;
        background-color:#6554C0;
        span{
            margin-right:10%;
        }
    }
 `;
    
const User = styled.div`
width:20%;
height:50%;
display:flex;
justify-content:center;
align-items:stretch;
font-size:2rem;
color:#efefef;
`;
