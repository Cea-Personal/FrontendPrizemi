import React from "react";
import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa";
import Issues from '../data/landingPage/solutions'



const StatementOfIssuesContainer = () => {
    return (
        <Container >
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
width:40%;
@media(max-width:500px){
  width:60%;
 
 }
`
const Issue = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:1%;
  font-size:1.5rem;
  color:#6554C0;
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