import React,{useContext, createRef, useState, useEffect} from 'react';
import Calculator from '../../assests/calculator.svg'
import Features from '../../assests/features.svg'
import Requirements from '../../assests/requirements.svg'
import styled from 'styled-components'
import {ScrollContext } from '../../state/context';

const PictureOfProcess = () => {
    const [internalScrollValue , setInternalScrollValue] = useState(0)
    const scroll = useContext(ScrollContext)
    const scrollRef = createRef<HTMLDivElement>()
    const scrolled = ()=> {
        return scroll.dispatch({type:'stopScroll'})
    }

    return (
        <Container onScroll={scrolled} scrollvalue = {internalScrollValue} ref ={scrollRef} scroll = {scroll.state.scrollTop} height = {scroll.state.scrollHeight}>
            <img src={Requirements} alt =''/>
            <img src={Features} alt =''/>
            <img src={Calculator} alt =''/>
        </Container>
    )
}

export default PictureOfProcess;

const Container = styled.div<{scroll: number, height:number ,scrollvalue:number}>`
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;
img{
    width:100%;
    padding-top:20%;
    margin-bottom:15%;
}
`;

