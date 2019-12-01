
import React from "react";
import styled from "styled-components";
import PicturesOfIssuesContainer from './solutions/picturesOfIssues'
import StatementOfIssuesContainer from './solutions/issues'
const Issues = () => {
    return (
        <Container>
            <PicturesOfIssuesContainer />
            <StatementOfIssuesContainer />
        </Container>

    )
}
export default Issues

const Container = styled.div`
display:flex;
width:100%;
margin-top:0.8rem;
height:100%;
`;

