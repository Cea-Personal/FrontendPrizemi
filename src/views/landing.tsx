import React, { useContext} from "react";
import {LoginContext} from '../state/context';
// import {Redirect} from 'react-router-dom'
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity";
import banner from '../assests/banner.svg'
import Navbar from '../components/navbar';



const Home = (props) => {
  const { isLoggedIn } = useIdentityContext()
  const UseLoginContext = useContext(LoginContext)
  const getStarted =()=>{
    !isLoggedIn ? UseLoginContext.dispatch({type:'open',payload:'Signup on PrizeMi'}) : props.history.push('/dashboard')
  }
  return (
    <Container >
            <Navbar />
      <Hero isInactive= {UseLoginContext.state.inactive}>
  
        <Details>
          <p>
            Feature-based price management for developers
        </p>
          <Button onClick={getStarted}>Get Started </Button>
        </Details>
      
      </Hero>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  @media(max-width:800px){
    flex-direction:column;

  }
  @media(max-height:450px){
      flex-direction:row;
      align-items:center;
  }
`;
const Hero = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background:url(${banner});
  ${props => (props.isInactive && `overflow: hidden`)};
  ${props => (props.isInactive && `pointer-events: none`)};
  ${props => (props.isInactive && `opacity: 0.7`)};
  background-repeat:no-repeat;
  background-size:95%;
  flex-direction: column;
  h1 {
    color: rgb(74, 74, 125);
    font-size: 3em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 0;
    text-align: center;
    @media(max-width:800px){
        font-size:2.5em;
      }
  }
  p {
    margin-bottom: 5%;
    @media(max-height:450px){
        font-size:1em;
      }
  }
  @media(max-width:800px){
    width:100%;
  }
`;

const Details = styled.div`
  width:30%;
  margin-left:15%;
  height:80%;
  display: flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;

  p {
    font-size:2.5rem;
    color:white;
  }
`;
const Button = styled.button`
margin-top:5%;
background: #091E42;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
border:none;
outline:none;
width:13rem;
height:3rem;
font-size:1.5rem;
color:white;
`;
const Sign = styled.div`
 width:80%;
 margin-top:3vh;
 height:30%;
 border-radius:10px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 border: 2px solid rgb(30, 20, 93);
 align-items:center;
 h2{
     color:rgb(74, 74, 125);
     font-size:1.5em;
     @media(max-height:450px){
        font-size:1em
    }
 }
 @media(max-width:800px){
    height:25%;
}
@media(max-height:450px){
    height:25%;
}
`
const Socials = styled.div`
    display:flex;
    width:100%;
    margin-bottom:10%;
    justify-content:center;
    svg{
        font-size:2em;
       margin:0 3%;
       color: rgb(30, 20, 93);
`;