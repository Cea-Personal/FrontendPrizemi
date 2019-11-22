import React, {useState} from 'react';
import styled from "styled-components";
import Icon from '../assests/splash.svg';

const Splash = () => {
    return (
        <Container>
<Image />
        </Container>
    )
}

export default Splash;

const Image = styled.div`
    background: url(${Icon});
    display:flex;
    justify-content:center;
    align-items:center;
    height:10%;
    width:10%;
    background-size:contain;
    background-repeat:no-repeat;


`;
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
background-color:#ffffff;
`;
