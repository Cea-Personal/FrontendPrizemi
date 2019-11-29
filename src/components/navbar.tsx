import React, { useContext } from 'react';
import { LoginContext, ScrollContext } from '../state/context';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from "react-netlify-identity";
import {FaUser} from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assests/logo.svg';
import Modal from './modal'

const Navbar = () => {
    const UseLoginContext = useContext(LoginContext)
    const UseScrollContext = useContext(ScrollContext)
    const { isLoggedIn, logoutUser, user } = useIdentityContext()
    return (
        <Container scroll = {UseScrollContext.state.scrollTop} height = {UseScrollContext.state.scrollHeight}>
            <Logo isInactive={UseLoginContext.state.inactive}>
                <img src={logo} alt='logo' />
                <p>PrizeMi</p>
            </Logo>
            <Actions isInactive={UseLoginContext.state.inactive}>
                <NavLink to='/features'>Features</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </Actions>
            {!isLoggedIn && <Button isInactive={UseLoginContext.state.inactive} onClick={() => UseLoginContext.dispatch({ type: 'open', payload: 'Login to PrizeMi' })}>Log In</Button>}
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

const Container = styled.div<{scroll: number, height:number}>`
 ${props => (props.scroll > props.height/24  ? `margin-top: 0%` : `margin-top:5%`)};
  ${props => (props.scroll > props.height/24  ? `position: fixed` : `position:absolute`)};
  ${props => (props.scroll > props.height/24? `background-color: ${props.color}` : `background-color:initial`)};
    height:10vh;
    z-index:1;
    width:100%;
    display:flex;
    justify-content:center;

`
const Logo = styled.div<{isInactive: boolean}>`
    display:flex;
    justify-content:space-evenly;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    align-items:center;
    width:25%;
    margin-left:10%;
    height:100%;
    img{
        width:25%;
        height:100%;
    }
    p{
        color: #091E42;
        font-size:2rem;
        font-weight:bold;

    }
`;
const Actions = styled.div<{isInactive: boolean}>`
    display:flex;
    justify-content:space-evenly;
    width:30%;
    margin-left:10%;
    align-items:center;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    color: #091E42;
    font-weight:bold;
    font-size:1.2rem;
    a{
        text-decoration:none;
        color: #091E42;
    }
`;


const Button = styled.button<{isInactive?: boolean}>`
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
