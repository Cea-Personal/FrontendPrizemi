import React, { useContext, useState } from 'react';
import { LoginContext, ScrollContext } from '../state/context';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from "react-netlify-identity";
import {FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assests/logo.png';
import Modal from './modal'

const Navbar = () => {
    const UseLoginContext = useContext(LoginContext)
    const [isMobile, setIsMobile] = useState(false)
    const UseScrollContext = useContext(ScrollContext)
    const { isLoggedIn } = useIdentityContext()
    const AuthClicked = (value: string) => {
        UseLoginContext.dispatch({ type: 'open', payload: value })
        setIsMobile(false)

    }
    const hamBurgerClicked = () => {
        setIsMobile(!isMobile)
        !isMobile && UseLoginContext.dispatch({ type: 'stopScroll' })

    }
    const OtherLinksClicked = () => {
        setIsMobile(false)
        UseLoginContext.dispatch({ type: 'close' })

    }

    return (
        <Container scroll={UseScrollContext.state.scrollTop} height={UseScrollContext.state.scrollHeight} isModalOpen={UseLoginContext.state.isModalOpen}>
            <Logo className='actions' isModalOpen={UseLoginContext.state.isModalOpen}>
                <img src={logo} alt='' />
                <p>PrizeMi</p>
                <Hamburger className='actions' >
                    {!isMobile ? <Button3 onClick={() => hamBurgerClicked()} > Menu </Button3> : <Button3 onClick={() => OtherLinksClicked()} > Close </Button3>}</Hamburger>

            </Logo >
            <Actions className='actions' isModalOpen={UseLoginContext.state.isModalOpen} mobile={isMobile}>
                <NavLink to='/' onClick={() => OtherLinksClicked()}>Home</NavLink>
                <NavLink to='/features' className='alternate' onClick={() => OtherLinksClicked()}>Features</NavLink>
                <NavLink to='/contact' onClick={() => OtherLinksClicked()}>Pricing</NavLink>
                <NavLink to='/contact' className='alternate' onClick={() => OtherLinksClicked()} >Integrations</NavLink>
            </Actions>
            {!isLoggedIn && <Button isLoggedIn={isLoggedIn} mobile={isMobile} isModalOpen={UseLoginContext.state.isModalOpen} onClick={() => AuthClicked('Signup on PrizeMi')}>Sign Up</Button>}
            {!isLoggedIn && <Button2 isLoggedIn={isLoggedIn} mobile={isMobile} className='login' isModalOpen={UseLoginContext.state.isModalOpen} onClick={() => AuthClicked('Login to Prizemi')}>Log In</Button2>}
            {isLoggedIn && <Button isLoggedIn={isLoggedIn} mobile={isMobile} isModalOpen={UseLoginContext.state.isModalOpen}>Dashboard</Button>}
            {isLoggedIn && <Button2 isLoggedIn={isLoggedIn} mobile={isMobile} className='login' isModalOpen={UseLoginContext.state.isModalOpen}>Profile</Button2>}
            {/* <Button onClick={logoutUser}>Log Out</Button>} */}
            {UseLoginContext.state.isModalOpen && <Modal />}
        </Container>
    )
}

export default Navbar

const Container = styled.div<{ scroll: number, height: number, isModalOpen: boolean }>`
 ${props => (props.scroll > props.height / 52 ? `margin-top: 0%` : `margin-top:3%`)};
  ${props => (props.scroll > props.height / 52 ? `position: fixed` : `position:absolute`)};
  ${props => (props.scroll > props.height / 52 && `background-color: #531DAB`)};
  ${props => (props.scroll > props.height / 52 && `box-shadow: -1px 3px 5px -1px rgba(0,0,0,0.3)`)};
  opacity:1;
    height:10vh;
    z-index:+6;
    width:100%;
    display:flex;
    justify-content:center;
    .actions{
        a ,p, svg{
            color: #fff;
        } 
        @media(max-width:800px) and (min-height:401px){
            a{
                color: #595959};
        }
    }
    @media(max-width:800px) and (min-height:401px){
        flex-direction:column;
    }
    @media(max-height:400px){
        height:15vh;
    }
`
const Button3 = styled.button`
    font-size:1rem;
    background-color:#fff;
    border-radius:5px;
    outline:none;
    border:none;
    color: #091E42;
`;
const Logo = styled.div<{ isModalOpen: boolean }>`
    display:flex;
    z-index:6;
    justify-content:flex-start;
    ${props => (props.isModalOpen && `pointer-events: none`)};
    ${props => (props.isModalOpen && `opacity: 0.5`)};
    align-items:center;
    width:25%;
    margin-left:1%;
    img{
        width:18%;
        height:70%;
        @media(max-width:800px) and (min-height:401px){
            height:50%;
        }
    }
    @media(max-width:800px) and (min-height:401px){
        width:90%;
        justify-content:center;
        margin-left:10%;
    }
    @media(max-height:400px){
        width:30%;
    }
    p{  z-index:6;
        font-size:2rem;
        padding-left:5%;
        font-weight:bold;
        @media(max-height:400px){
            font-size:1.5rem;
        }
        @media(max-width:800px) and (min-height:401px){
            width:90%;
            font-size:1.5rem;
            text-align:center;
        }

    }
`;
const Actions = styled.div<{ mobile: boolean, isModalOpen: boolean }>`
    display:flex;
    justify-content:space-evenly;
    width:40%;
    margin-left:10%;
    align-items:center;
    ${props => (props.isModalOpen && `pointer-events: none`)};
    ${props => (props.isModalOpen && `opacity: 0.3`)};
    font-weight:bold;
    font-size:1.2rem;
    @media(max-height:400px){
        font-size:0.9rem;
        width:70%;
    }
    a{  
        text-decoration:none;
    }
  
    @media(max-width:800px) and (min-height:401px){
    ${props => (props.mobile ? `flex-direction: column ` : `display:none`)};
    width:90%;
    height:50vh;
    margin-left:0;
    position:fixed;
    align-items:flex-start;
    margin:0 5%;
    top:15vh;
    background-color:#ffffff;
    a{
        width:100%;
        height:12.5vh;
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
@media(max-width:800px) and (min-height:401px){
display:flex;
align-items:center;
font-size:1.5rem;
margin-right:5%;

}
`;
const Button = styled.button<{ mobile: boolean, isModalOpen?: boolean, isLoggedIn: boolean }>`
    display:none;
    ${props => (props.isModalOpen && `pointer-events: none`)};
    ${props => (props.isModalOpen && `opacity: 0.3`)};
    color: #091E42;
    background-color: #ffffff;
    font-weight:bold;
    font-size:1rem;
    width:8%;
    outline:none;
    border:none;
    border-radius:5px;
    height:50%;
    z-index:6;
    @media(max-width:800px) and (min-height:401px){
        width:90%;
        ${props => (props.mobile ? `display:flex` : `display:none`)};
        position:fixed;
        color:#595959;
        height:12.5vh;
        top:65vh;
        align-items:center;
        margin:0 5%;
        font-size:1.2rem;
        padding-left:10%;
        border-radius:0;
      
    }
    
`;
const Button2 = styled.button<{ isModalOpen?: boolean, mobile: boolean, isLoggedIn: boolean }>`
    display:flex;
    outline:none;
    margin-top:1.5%;
    border:none;
    font-weight:bold;
    font-size:1rem;
    width:8%;
    justify-content:center;
    border-radius:5px;
    height:50%;
    ${props => (props.isModalOpen && `pointer-events: none`)};
    ${props => (props.isModalOpen && `opacity: 0.7`)};
    ${props => (props.isLoggedIn ? `color: #ffffff` : `color: #391085`)};
    ${props => (props.isLoggedIn ? `background-color:inherit` : ` background-color: #ffffff`)};
    span{
        margin-right:10%;
    }
    @media(max-height:400px){
        font-size:0.9rem;
        width:20%;
        margin-right:5%;
    }
    @media(max-width:800px) and (min-height:401px){
        ${props => (props.mobile ? `display: flex ` : `display:none`)};
        flex-direction:row;
        outline:none;
        border:none;
        font-weight:bold;
        color: #ffffff;
        border-radius:5px;
        width:90%;
        position:fixed;
        height:12.5vh;
        top:77.5vh;
        align-items:center;
        justify-content:flex-start;
        margin:0 5%;
        font-size:1.2rem;
        padding-left:10%;
        border-radius:0;
        background-color:#722ED1;
        span{
            margin-right:5%;
        }
    }
 `;

