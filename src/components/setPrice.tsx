import React,{useContext} from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import { LoginContext } from '../state/context';
import Info from '../data/landingPage/priceProcess'
const ProcessDescription = () => {
    const UseLoginContext = useContext(LoginContext)
    return (
        <Container isInactive={UseLoginContext.state.inactive} isModalOpen={UseLoginContext.state.isModalOpen}>
            <p>Setting the price for your software job has a better approach</p>
            <Details>
            {Info.map(eachInfo =>
                <Description key={eachInfo.id}>
                    <img src ={eachInfo.image} alt =''/>
                    <p className='heading'>{eachInfo.heading}</p>
                    <p className='moreDetails'>{eachInfo.details}</p>
                </Description>

            
            )}
            </Details>
               <Learn>
                  <p> Learn more about PrizeMi</p>
                  <NavLink to='/features'>See features</NavLink> 
              </Learn>
        </Container>

    )
}
export default ProcessDescription;

const Container = styled.div<{ isInactive: boolean, isModalOpen:boolean }>`
color:#ffffff;
${props => (props.isModalOpen && `pointer-events: none`)};
${props => (props.isModalOpen && `opacity: 0.7`)};
${props => (props.isInactive ? `display: none `: `display:flex`)};
width:100%;
height: 100%;
padding-top:5%;
background-color:#f2f2f2;
flex-direction:column;
@media(max-width:800px){
  clip-path:none;
}
p{
    text-align:center;
    font-size:2rem;
    color: #B89400;
    @media(max-width:800px){
        font-size:1.5rem;
    }
    @media(max-height:400px){
       width:80%;
       margin:0 10%;
    }
}

`
const Description = styled.div`
margin-top:5%;
width:30%;
padding:1%;
border-radius:10px;
@media(max-width:800px){
    width:100%;
    margin-top:10vh;
}
.heading{
    font-size:1.5rem;
    color:#091E42;
    text-align:left;
    margin-top:10%;
    width:90%;
    margin-left:5%;
    @media(max-width:800px){
     font-size:1.2rem;
     
     }
  }
  .moreDetails{
    width:90%;
    margin-left:5%;
    font-size:1rem;
    color:#091E42;
    text-align:left;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }

img{
    width:100%;
    height:50%;
}

`;
const Details = styled.div`
    display:flex;
    justify-content:space-evenly;
    height:100%;
    width:90%;
    margin:0 5%;
    @media(max-height:400px){
       width:80%;
       margin:0 10%;
    }
    @media(max-width:800px){
        flex-direction:column;
    }
  
`
const Learn = styled.div`
display:flex;
width:80%;
margin:5% 10%;
padding:5% 10%;
border-top:2px solid #091E42;
align-items:center;
justify-content:space-evenly;
@media(max-width:800px){
    flex-direction:column;
}p{
    padding-bottom:5%;
}
a{
    text-decoration:none;
    color:#fff;
    background-color:#091E42;
    display:flex;
    width:150px;
    height:40px;
    align-items:center;
    justify-content:center;
    border-radius:10px;

}
`;