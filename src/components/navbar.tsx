import React, { useContext } from 'react';
import { LoginContext } from '../state/context';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from "react-netlify-identity";
import {FaUser} from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assests/logo.svg';
import Modal from './modal'

const Navbar = () => {
    const UseLoginContext = useContext(LoginContext)
    const { isLoggedIn, logoutUser, user } = useIdentityContext()
    return (
        <Container>
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

const Container = styled.div`
    margin-top:5%; 
    height:10vh;
    z-index:1;
    margin-left:12%;
    background-color:initial;
    width:72%;
    display:flex;
    justify-content:center;
    border-bottom:1px solid #e2e2e2;
    position:fixed;

`
const Logo = styled.div<{
    isInactive: boolean
}>`
    display:flex;
    justify-content:space-evenly;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    align-items:center;
    width:30%;
    height:100%;
    img{
        width:25%;
        height:100%;
        margin-left:5%;
    }
    p{
        color: #091E42;
        margin-top:3%;
        font-size:2rem;
        font-weight:bold;
    }
`;
const Actions = styled.div<{
    isInactive: boolean
}>`
    display:flex;
    justify-content:space-evenly;
    width:50%;
    align-items:center;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    margin-left:20%;
    color: #091E42;
    font-weight:bold;
    font-size:1.2rem;
    a{
        text-decoration:none;
        color: #091E42;
    }
`;


const Button = styled.button<{
    isInactive?: boolean
}>`
    outline:none;
    margin-top:1.5%;
    border:none;
    ${props => (props.isInactive && `pointer-events: none`)};
    ${props => (props.isInactive && `opacity: 0.7`)};
    background-color:#ffffff;
    font-weight:bold;
    font-size:1rem;
    width:10%;
    color: #091E42;
    border-radius:5px;
    height:50%;

`;
const User = styled.div`
width:20%;
height:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:2rem;
`;
