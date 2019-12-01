import React from "react";
import styled from "styled-components";
import Description from "./processDescription"

const Process = () => {
    return (
        <Container>
                    <ScrollBar>

                    </ScrollBar>
                    <Description />
                </Container>
    )
}
export default Process


const Container = styled.div`
width: 50%;
display:flex;
`;
const ScrollBar = styled.div`
width:10%;
margin-left:5%;
`;
