import React, { useContext, createRef, useEffect } from "react";
import { LoginContext, ScrollContext } from '../state/context';
// import {Redirect} from 'react-router-dom'
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity";
import banner from '../assests/banner.svg';
import Navbar from '../components/navbar';
import client from '../assests/client.svg';
import clock from '../assests/clock.svg';
import thinking from '../assests/thinking.svg';
import { RouteComponentProps } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

interface HomeProps extends RouteComponentProps {

}
const Problems = [
  {
    id: 0,
    issue: 'Thinking about what to charge for a project'

  },
  {
    id: 1,
    issue: 'Worries about flunctuating client requirements'

  },
  {
    id: 2,
    issue: 'Poor time estimation for developing features'

  },
]

const Home = (props: HomeProps) => {
  const { isLoggedIn } = useIdentityContext()
  const UseLoginContext = useContext(LoginContext)
  const scroll = useContext(ScrollContext)
  const appRef = createRef<HTMLDivElement>()
  const scrollEffect = () => {
    // if (scroll.state.scrollTop == 0) {
    //   scroll.dispatch({
    //     type: 'stopScroll',
    //     payload: {
    //       scrollTop: window.pageYOffset,
    //       scrollHeight: appRef.current && appRef.current.scrollHeight,
    //     }
    //   })
    //   return window.removeEventListener('scroll', scrollEffect)
    // }
    // else {
    scroll.dispatch({
      type: 'scrolling',
      payload: {
        scrollTop: window.pageYOffset,
        scrollHeight: appRef.current && appRef.current.scrollHeight,
      }
    })
    // }
  }
  const getStarted = () => {
    !isLoggedIn ? UseLoginContext.dispatch({ type: 'open', payload: 'Signup on PrizeMi' }) : props.history.push('/dashboard')
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollEffect)
    return () => window.removeEventListener('scroll', scrollEffect)
  })
  return (
    <Container isInactive={UseLoginContext.state.inactive} ref={appRef}>
      <Navbar />
      <Hero isInactive={UseLoginContext.state.inactive}>
        <Details>
          <p>
            Feature-based price management system for developers
        </p>
          <Button onClick={getStarted}>Get Started </Button>
        </Details>
      </Hero>
      <Issues>
        <PicturesOfIssuesContainer>
          <img className='image1' src={thinking} alt='' />
          <img className='image2' src={client} alt='' />
          <img className='image3' src={clock} alt='' />
        </PicturesOfIssuesContainer>
        <StatementOfIssuesContainer>
          <Focus>Focus on building the application</Focus>
          <Goodbye>Say GoodBye to:</Goodbye>
          {Problems.map(eachIssue =>
            <Issue key={eachIssue.id}>
              <FaCheckCircle />
              <p>{eachIssue.issue}</p>
            </Issue>)

          }
        </StatementOfIssuesContainer>
       </Issues>
    </Container>
  );
};

export default Home;

const Container = styled.div<{ isInactive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction:column;
  ${props => (props.isInactive && `overflow: hidden`)};
  background-color: white;
  @media(max-width:800px){
    flex-direction:column;

  }
  @media(max-height:450px){
      flex-direction:row;
      align-items:center;
  }
`;
const Hero = styled.div<{ isInactive: boolean }>`
  width: 100%;
  height: 95vh;
  display: flex;
  background:url(${banner});
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
const Issues = styled.div`
display:flex;
width:100%;
margin-top:5%;
height:100%;
`;
const PicturesOfIssuesContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
.image1{
  margin:0% 0% 0% 30%;
  padding:0;
  z-index:3;
}
.image2{
  margin-left:0%;
  transform:translateY(-20%);
  z-index:2;
}
.image3{
  margin-left:40%;
  transform:translateY(-40%);
  z-index:1;
}
`;
const StatementOfIssuesContainer = styled.div`
width:50%;
`
const Focus = styled.p`
font-size:2rem;
margin-top:10%;
font-weight:bold;
color: #091E42;
`;
const Goodbye = styled.p`
font-size:1.5rem;
margin-top:5%;
margin-left:20%;
font-weight:bold;
color: #091E42;
`;
const Issue = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:2%;
  font-size:1.5rem;
  color:#6554C0;
  p{
    font-size:1.2rem;
    margin-left:5%;
    color: #091E42;
    width:80%;
  }
`;