
import React from "react";
import styled from "styled-components";
import PicturesOfIssues from '../assests/issues.svg'
import StatementOfIssuesContainer from './issues'
const Issues = () => {
    return (
        <Container>
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

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
background-color:#ffffff;
height:100%;
justify-content:center;
`;
const Focus = styled.p`
font-size:2rem;
font-weight:bold;
color: #091E42;
text-align:center;
@media(max-width:500px){
  font-size:1.3rem;
  

  }
`;
const Goodbye = styled.p`
font-size:1.2rem;
margin-left:53%;
width:40%;
color: #091E42;
@media(max-width:500px){
  margin-top:2%;
  margin-left:5%;
  font-size:1rem;
  width:90%;
  
  }
`;
const Heading = styled.div``;

const Details = styled.div`
display:flex;
width:90%;
margin: 0 5%;
height:100%;  
margin-bottom:5%;
jusitfy-content:center;
@media(max-width:500px){
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
    }

img{
    width:70%;
    height:60vh;
    @media(max-width:500px){
        margin-top:8%;
    }
}`;

