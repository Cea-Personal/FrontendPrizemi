import React, { useContext, createRef, useEffect } from "react";
import { LoginContext, ScrollContext } from '../state/context';
import styled from "styled-components";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Solution from '../components/solution';
import Footer from '../components/footer'
import SetPrice from '../components/setPrice';

import { RouteComponentProps } from 'react-router-dom';

interface HomeProps extends RouteComponentProps {

}
const Home = (props: HomeProps) => {
  const UseLoginContext = useContext(LoginContext)
  const scroll = useContext(ScrollContext)
  const appRef = createRef<HTMLDivElement>()
  let value: number | null;

  const scrollEffect = () => {
    scroll.dispatch({
      type: 'scrolling',
      payload: {
        scrollTop: window.pageYOffset,
        scrollHeight: value,
      }
    })
  }

  useEffect(() => {
    value = appRef.current && appRef.current.scrollHeight
    window.addEventListener('scroll', scrollEffect)
    return () => window.removeEventListener('scroll', scrollEffect)
  })
  return (
    <Container isInactive={UseLoginContext.state.inactive} top={scroll.state.scrollTop} scrolled = {scroll.state.scrollHeight} ref={appRef}>
      <Navbar />
      <Hero props={props}/>
      <Solution />
      <SetPrice  />
      <Footer/>
  

     
    </Container>
  );
};

export default Home;

const Container = styled.div<{ isInactive: boolean ,top:number , scrolled:number}>`
  width: 100%;
  display: flex;
  height:100%;
  background: rgb(204, 188 ,124);
  flex-direction:column;
  ${props => (props.top > props.scrolled/4 && `overflow: hidden`)};
  ${props => (props.isInactive && `overflow: hidden`)};

  @media(max-width:800px){
    flex-direction:column;

  }
  @media(max-height:450px){
      flex-direction:row;
      align-items:center;
  }
`;


