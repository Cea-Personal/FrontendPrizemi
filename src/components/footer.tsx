import React,{useContext} from 'react';
import styled from 'styled-components';
import { LoginContext } from '../state/context';
const Footer = ()=> {
    const UseLoginContext = useContext(LoginContext)
    return (
    <Container isInactive={UseLoginContext.state.inactive}>
            <p>PrizeMi</p>
            <Links>
            <a>Send feedback</a>
            <a>Take survey</a>
            <a>Pricing</a>
            </Links>
    </Container>)
}
export default Footer

const Container = styled.div<{ isInactive: boolean}>`
height:20vh;
width:100%;
${props => (props.isInactive ? `display: none `: `display:flex`)};
justify-content:center;
align-items:center;
clip-path: polygon(100% 0%, 0% 40%, 0% 100%, 100% 100%);
@media(max-width:500px){
    clip-path:none;
    flex-direction:column;
}
p{
    color:#091E42;
    margin-top:5%;
    width:40%;
    text-align:center;
    font-weight:bold;
    font-size:2rem;
    @media(max-width:500px){
      font-size:1.2rem;
    }
}`;
const Links = styled.div`
display:flex;
width:60%;
justify-content:center;
@media(max-width:500px){
  width:100%;
  order:-1;
}
a{
    text-decoration:none;
    padding-top:5%;
    font-weight:bold;
    margin:0 3%;
    font-size:1.2rem;
    color:#091E42;
    @media(max-width:500px){
        font-size:.8rem;
    }
}

`
