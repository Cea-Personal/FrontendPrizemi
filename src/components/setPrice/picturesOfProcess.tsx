import React,{useContext, createRef, useState} from 'react';
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
        scroll.dispatch({type:'stopScroll'})
    
        console.log(scrollRef.current && scrollRef.current.scrollTop)
        return scrollRef.current && setInternalScrollValue(scrollRef.current.scrollTop)
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
transform: scaleX(-1);
:-webkit-scrollbar {
    width: 3px;
    background-color:
	
}
flex-direction:column;
align-items:center;
justify-items:center;
${props => (props.scroll > props.height/1.55 ? `overflow: scroll`:`overflow:hidden`)};
img{
    width:100%;
    height:95vh;
    margin-bottom:26%;
}
`;

