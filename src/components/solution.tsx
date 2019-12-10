
import React from "react";
import styled from "styled-components";
import PicturesOfIssues from '../assests/issues.svg'
import StatementOfIssuesContainer from './issues'
const Issues = () => {
    return (
        <Container>
            <Heading>

           
                <Focus>Focus on building the application</Focus>
                <Goodbye>Prizemi features helps developers build applications by managing stakeholders and requirements. PrizeMi helps you:</Goodbye>
             
                </Heading>
                <Details>
            <img src={PicturesOfIssues} alt='' />
            <StatementOfIssuesContainer />
            </Details>
        </Container>

    )
}
export default Issues

const Container = styled.div`
display:flex;
flex-direction:column
width:100%;
background-color:#ffffff;
height:100%;
`;
const Focus = styled.p`
font-size:2rem;
margin-top:10%;
font-weight:bold;
color: #091E42;
@media(max-width:500px){
  font-size:1.5rem;
  margin-top:5%;
  
  }
`;
const Goodbye = styled.p`
font-size:1.2rem;
margin-top:5%;
font-weight:bold;
color: #091E42;
@media(max-width:500px){
  margin-top:2%;
  
  }
`;
const Heading = styled.div``;

const Details = styled.div`
display:flex;
align-items:center;
margin-bottom:10%;
img{
    width:40%;
}`;

