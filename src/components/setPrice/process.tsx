import React, { useContext } from "react";
import styled from "styled-components";
import Description from "./processDescription"
import { ScrollContext } from '../../state/context'
const Process = () => {
    const scroll = useContext(ScrollContext)
    return (
        <Container scroll={scroll.state.scrollTop} height={scroll.state.scrollHeight}>
            <ScrollBar>
            </ScrollBar>
            <RightContainer>
                <Description />
                <Learn>
                    <p> Learn more about PrizeMi</p>
                    <button> See features</button>
                </Learn>
            </RightContainer>
        </Container>
    )
}
export default Process


const Container = styled.div<{ scroll: number, height: number }>`
width: 100%;
display:flex;
transform: translateY(-75vh);
`;
const Learn = styled.div`
display:flex;
width:90%;
height:10%;
justify-content:center;
align-items:center;
margin-top:17%;
padding-top:7%;
height:5rem;
border-top:1px solid white;
p{width:50%;
    color:#B89400;
    font-size:2rem;
    font-weight:bold;
}
button{
    height:3rem;
    outline:none;
    color: #6554C0;
    font-size:1.2rem;
    width:10rem;
    border-radius:5px;
}

`;
const RightContainer = styled.div`
width:100%;
height:30vh;
`;
const ScrollBar = styled.div`
width:5%;
margin-left:2%;
`;
