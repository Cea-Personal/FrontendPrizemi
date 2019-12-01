import React from "react";
import styled from "styled-components";
import client from '../../assests/client.svg'
import clock from '../../assests/clock.svg';
import thinking from '../../assests/thinking.svg';

const PicturesOfIssues =()=> {
    return (
        <Container>
        <img className='image1' src={thinking} alt='' />
        <img className='image2' src={client} alt='' />
        <img className='image3' src={clock} alt='' />
      </Container>
    )
}
export default PicturesOfIssues


const Container = styled.div`
width:50%;
z-index:3;
display:flex;
flex-direction:column;
.image1{
  margin:0% 0% 0% 30%;
  padding:0;
}
.image2{
  margin-left:0%;
  transform:translateY(-20%);
}
.image3{
  margin-left:30%;
  transform:translateY(-40%);
}
`;