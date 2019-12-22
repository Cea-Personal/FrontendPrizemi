
import React, { useContext } from "react";
import styled from "styled-components";
import PicturesOfIssues from '../assests/issues.svg'
import StatementOfIssuesContainer from './issues'
import { LoginContext } from '../state/context';

const Issues = () => {
    const UseLoginContext = useContext(LoginContext)
    return (
        <Container isInactive={UseLoginContext.state.inactive} isModalOpen={UseLoginContext.state.isModalOpen}>
            <Heading>
                <Focus>Focus on building the application</Focus>
                <Goodbye>Prizemi features helps developers build applications by managing stakeholders and requirements.</Goodbye>
            </Heading>
            <Details>
                <img src={PicturesOfIssues} alt='' />
                <StatementOfIssuesContainer />
            </Details>
        </Container>

    )
}
export default Issues

const Container = styled.div<{ isInactive: boolean, isModalOpen: boolean }>`
${props => (props.isInactive ? `display: none` : `display:flex`)};
${props => (props.isModalOpen && `pointer-events: none`)};
${props => (props.isModalOpen && `opacity: 0.7`)};
flex-direction:column;
width:100%;
background-color:#ffffff;
height:100%;
justify-content:center;
@media(max-height:450px){
    width:90%
    margin:0 5%;
}
`;
const Focus = styled.p`
font-size:2rem;
font-weight:bold;
color: #091E42;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-left:18%;
@media(max-height:450px){
    font-size:1.5rem;
}
@media(max-width:800px) and (min-height:401px){
  font-size:1.2rem;
  margin-left:10%;
    width:80%;
  }
`;
const Goodbye = styled.p`
font-size:1.2rem;
margin-left:56%;
width:35%;
padding-top:5%;
color: #091E42;
margin-bottom:0;
@media(max-height:450px){
    font-size:1rem;
    }
@media(max-width:800px)and (min-height:401px){
  margin-top:2%;
  margin-left:10%;
  font-size:1rem;
  width:80%;
  
  }
`;
const Heading = styled.div``;

const Details = styled.div`
display:flex;
width:90%;
margin: 0 5%;
height:100%;  
margin-top:0;
margin-bottom:5%;
jusitfy-content:center;
@media(max-width:800px)and (min-height:401px){
        flex-direction:column;
        margin:0 10%;
        justify-content:flex-start;
        align-items:center;
        width:80%;
    }

img{
    width:70%;
    height:60vh;
    transform:translateY(-7vh);
    @media(max-height:400px){
        transform:translateY(-20vh);
        height:90vh;
        width:55%;
    }
    @media(max-width:800px) and (min-height:401px){
        margin-top:8%;
        transform:translateY(0px);
        width:100%;
    }
}`;

