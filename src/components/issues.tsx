import React from "react";
import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa";
import Issues from '../data/landingPage/solutions'



const StatementOfIssuesContainer = () => {
    return (
        <Container >
          <Goodbye>Prizemi helps you:-</Goodbye>
                {Issues.map(eachIssue =>
                    <Issue key={eachIssue.id}>
                        <FaCheckCircle />
                        <p>{eachIssue.issue}</p>
                    </Issue>)

                }
            </Container>
    )
}
export default StatementOfIssuesContainer


const Container = styled.div`
width:60%;
padding-top:1%;
@media(max-width:500px){
  width:80%;
 }
`
const Goodbye =styled.div`
font-size:1.2rem;
margin-left:7%;
width:100%;
font-weight:bold;
color: #091E42;
@media(max-width:500px){
  margin-left:5%;
  font-size:1rem;
  
  }
`;
const Issue = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:1%;
  font-size:1.5rem;
  color:#6554C0;
  padding-bottom:5%;
  @media(max-width:500px){
    padding-bottom:0
      }
  p{
    font-size:1.2rem;
    margin-left:5%;
    color: #091E42;
    width:80%;
    @media(max-width:500px){
    font-size:1rem;
      }
  }
`;