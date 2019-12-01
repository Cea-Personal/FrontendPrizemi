import React from "react";
import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa";
import Issues from '../../data/landingPage/solutions'


const StatementOfIssuesContainer = () => {
    return (
        <Container >
                <Focus>Focus on building the application</Focus>
                <Goodbye>Prizemi features helps developers build applications by managing stakeholders and requirements. PrizeMi helps you:</Goodbye>
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
`
const Focus = styled.p`
font-size:2rem;
margin-top:10%;
font-weight:bold;
color: #091E42;
`;
const Goodbye = styled.p`
font-size:1.2rem;
margin-top:5%;
font-weight:bold;
color: #091E42;
`;
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
  }
`;