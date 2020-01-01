import React, { useContext } from "react";
import { LoginContext } from '../state/context';
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity";
import banner from '../assests/banner.svg';
import {useHistory} from 'react-router'


const Hero = () => {
  const history = useHistory()
  const { isLoggedIn } = useIdentityContext()
  const UseLoginContext = useContext(LoginContext)
  const getStarted = () => {
    !isLoggedIn ? UseLoginContext.dispatch({ type: 'open', payload: 'Signup on PrizeMi' }) : history.push('/dashboard')
  }
  return (
    <Container isModalOpen={UseLoginContext.state.isModalOpen} isInactive={UseLoginContext.state.inactive}>
      <Details>
        <p>
          Feature-Based Price Management 
        </p>
        <Description>
          Requirement management.Better time estimation. Improved price negotiations for software projects.
        </Description>
        <Button onClick={getStarted}>Get Started </Button>
      </Details>
    </Container>
  )
}

export default Hero




const Container = styled.div<{ isInactive: boolean , isModalOpen:boolean }>`
  width: 100%;
  display: flex;
  background:url(${banner}) white;
  ${props => (props.isInactive && `pointer-events: none`)};
  ${props => (props.isModalOpen && `opacity: 0.5`)};
  height:130vh;
  background-repeat:no-repeat;
  background-size:100%;
  flex-direction: column;
  @media(max-width:800px) and (min-height:401px){
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    height:100vh;
    width:100%;
  }
`;
const Description = styled.div`
width:40%;
padding-top:0%;
font-size:1.5rem;
line-height:2rem;
color:#fff;
@media(max-height:400px){
  font-size:1rem;
  line-height:1.5rem;
  width:60%;
 
}
@media(max-width:800px) and (min-height:401px){
 font-size:1rem;
 width:90%;
 line-height:1.5rem;
}
`;
const Details = styled.div`
  width:100%;
  height:70%;
  display: flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  @media(max-width:800px) and (min-height:401px){
    width:90%;
    margin-left:5%;
  }
  p {
    font-size:3rem;
    color:white;
    line-height:6vh;
    background-size:95%;
    @media(max-width:800px) and (min-height:401px){
     font-size:1.5rem;
    }
    @media(max-height:400px){
      font-size:2rem;
      margin-top:1%;
    }
  
  }
 
`;
const Button = styled.button`
margin-top:2%;
background: #fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border:none;
outline:none;
width:10rem;
height:3rem;
font-size:1.5rem;
color:#595959;
@media(max-width:800px) and (min-height:401px){
  width:8rem;
  height:2rem;
  font-size:1rem;
 }
@media(max-height:400px){
  width:7rem;
  height:2rem;
  font-size:1rem;
}
`;