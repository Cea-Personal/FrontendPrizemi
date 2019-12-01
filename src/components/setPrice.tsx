import React,{useContext } from "react";
import styled from "styled-components";
import Process from './setPrice/process';
import {ScrollContext } from '../state/context';
import Pictures from './setPrice/picturesOfProcess'
const SetPrice = () => {
    const scroll = useContext(ScrollContext)

    return (
        <Container scroll = {scroll.state.scrollTop} height = {scroll.state.scrollHeight}>
            <SubHeading>
                <p>Setting the price for your software job has a better approach</p>
            </SubHeading>
            <ProcessDetails scroll = {scroll.state.scrollTop} height = {scroll.state.scrollHeight} >
                <Process />
                <Pictures/>
            </ProcessDetails>

        </Container>
    )
}
export default SetPrice


const Container = styled.div<{scroll: number, height:number}>`
display:flex;
width:100%;
background-color:#091E42;
flex-direction:column;
height:115vh;`


const SubHeading = styled.div`
display:flex;
margin-top:0%;
width:100%;
p{
  color:#B89400;
  width:50%;
  padding-left:6.5%;
  padding-top:5%;
  font-size:2rem;
}

`;
const ProcessDetails = styled.div<{scroll: number, height:number}>`
display:flex;
height:85vh;
`;
