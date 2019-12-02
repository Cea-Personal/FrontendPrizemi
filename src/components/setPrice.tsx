import React,{useContext, useState, createRef, useEffect } from "react";
import styled from "styled-components";
import {ScrollContext} from '../state/context';
import Process from './setPrice/process';
import Pictures from './setPrice/picturesOfProcess'
const SetPrice = () => {
    const scroll = useContext(ScrollContext)
    const contRef = createRef<HTMLDivElement>()
    const [containerScroll , setContainerScroll] = useState(0)

    const checkScroll = () => {
        return contRef.current && setContainerScroll(contRef.current.scrollHeight)
    }
    useEffect(()=> {
        checkScroll()
    },[checkScroll])

scroll.state.scrollTop < scroll.state.scrollHeight/1.7 && contRef.current && contRef.current.scrollTo(0, 0)
// when it has reached the end of the container it should trigger the innerscroll
// when you have scrolled up from the height of the container it should start scroll the innerScroll down by the same amount

    return (
        <Container  ref ={contRef} >
               {console.log( 'here', containerScroll, scroll.state.scrollHeight - scroll.state.scrollTop   )}
            <SubHeading  value={containerScroll}  scrolled = {scroll.state.scrollHeight} top = {scroll.state.scrollTop}>
                <p>Setting the price for your software job has a better approach</p>
                <Pictures/>
            </SubHeading>
            <Process />
           
        </Container>
    )
}
export default SetPrice


const Container = styled.div`
width:100%;
background-color:#091E42;
clip-path: polygon(100% 0%, 0% 0%, 0% 100%, 100% 90%, 100% 90%);
height:140vh;`


const SubHeading = styled.div<{ value:number , scrolled: number , top:number}>`
display:flex;
margin-top:0%;
${props => (props.top > props.scrolled /10 ? `overflow: scroll`: `overflow : hidden`)};
width:100%;
height:100vh;


p{
  color:#B89400;
  width:50%;
  padding-left:6.5%;
  padding-top:5%;
  font-size:2rem;
}

`;

