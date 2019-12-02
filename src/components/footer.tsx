import React from 'react';
import styled from 'styled-components';

const Footer = ()=> {
    return (
    <Container>
            <p>PrizeMi</p>
            <a>Send feedback</a>
            <a>Take survey</a>
            <a>Sign up</a>
            <a>Pricing</a>
    </Container>)
}
export default Footer

const Container = styled.div`
height:20vh;
width:100%;
display:flex;
justify-content:center;
clip-path: polygon(100% 0%, 0% 40%, 0% 100%, 100% 100%);
p{
    color:#091E42;
    margin-top:5%;
    width:40%;
    text-align:center;
    font-weight:bold;
    font-size:2rem;
}
a{
    text-decoration:none;
    padding-top:5%;
    font-weight:bold;
    margin:0 3%;
    font-size:1.2rem;
    color:#091E42;
}
`
