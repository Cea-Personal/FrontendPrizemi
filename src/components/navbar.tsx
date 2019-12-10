import React, { useContext } from 'react';
import { LoginContext, ScrollContext } from '../state/context';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from "react-netlify-identity";
import { FaUser, FaBars } from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assests/logo.svg';
import Modal from './modal'

const Navbar = () => {
    const UseLoginContext = useContext(LoginContext)
    const UseScrollContext = useContext(ScrollContext)
    const { isLoggedIn } = useIdentityContext()
    return (
        <Container scroll={UseScrollContext.state.scrollTop} height={UseScrollContext.state.scrollHeight}>
            <Logo className='actions' isInactive={UseLoginContext.state.inactive}>
                <p>PrizeMi</p>
            </Logo >
            <Actions className='actions' isInactive={UseLoginContext.state.inactive}>
                <NavLink to='/features'>Features</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/contact'>Feedback</NavLink>
            </Actions>
            {!isLoggedIn && <Button isInactive={UseLoginContext.state.inactive} onClick={() => UseLoginContext.dispatch({ type: 'open', payload: 'Login to PrizeMi' })}>Log In</Button>}
            {isLoggedIn && <User><FaUser /></User>}
            {/* <Button onClick={logoutUser}>Log Out</Button>} */}
            {UseLoginContext.state.isModalOpen && <Modal />}
            <Hamburger className='actions' ><FaBars /></Hamburger>
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
        width:80%;
    }
    img{
        width:25%;
        height:100%;
        z-index:6;
    }
    p{  z-index:6;
        font-size:2rem;
        font-weight:bold;

    }
`;
const Actions = styled.div<{ isInactive: boolean }>`
    display:flex;
    justify-content:space-evenly;
    width:30%;
    margin-left:10%;
    align-items:center;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    font-weight:bold;
    font-size:1.2rem;
    a{  z-index:6;
        text-decoration:none;
    }
    @media(max-width:500px){
        display:none;
    }
`;

const Hamburger = styled.div`
display:flex;
align-items:center;
font-size:1.5rem;
`;
const Button = styled.button<{ isInactive?: boolean }>`
    outline:none;
    margin-top:1.5%;
    margin-right:20%;
    border:none;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    background-color:#ffffff;
    font-weight:bold;
    font-size:1rem;
    width:8%;
    color: #091E42;
    border-radius:5px;
    height:50%;
    z-index:6;
    @media(max-width:500px){
        display:none;
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
