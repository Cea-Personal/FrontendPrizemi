import React from 'react';
import styled from 'styled-components';
import logo from '../assests/logo.svg';
 
const Navbar = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt='logo'/>
                <p>PrizeMi</p>
             
            </Logo>
            <Actions>
                <p>Features</p>
                <p>Contact</p>
            </Actions>
            <Button>Sign In</Button>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    margin-top:5%; 
    height:10vh;
    margin-left:12%;
    background-color:inherit;
    width:77%;
    display:flex;
    border-bottom:1px solid #e2e2e2;
    position:fixed;

`
const Logo = styled.div`
    display:flex;
    justify-content:space-evenly;
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
const Actions = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:50%;
    align-items:center;
    margin-left:20%;
    color: #091E42;
    font-weight:bold;
    font-size:1.2rem;
`;
const Button = styled.button`
    outline:none;
    margin-top:1.5%;
    border:none;
    background-color:#ffffff;
    font-weight:bold;
    font-size:1rem;
    width:10%;
    color: #091E42;
    border-radius:5px;
    height:50%;

`;