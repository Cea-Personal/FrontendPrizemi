import React from "react";
import styled from "styled-components";
import Info from '../../data/landingPage/priceProcess'
const ProcessDescription = () => {
    return (
        <Container>
            {Info.map(eachInfo =>
                <Description key={eachInfo.id}>
                    <p className='heading'>{eachInfo.heading}</p>
                    <p className='moreDetails'>{eachInfo.details}</p>
                </Description>
            )}
        </Container>

    )
}
export default ProcessDescription;

const Container = styled.div`
color:#ffffff;
width:40%;

.heading{
  font-size:1.5rem;
}
.moreDetails{
  font-size:1rem
}
`
const Description = styled.div`
margin-top:10%;
`;