import React,{useContext} from 'react';
import styled from 'styled-components';
import { useIdentityContext } from "react-netlify-identity";
import { LoginContext } from "../state/context";
import axios from 'axios';
import { FaGithub, FaBitbucket, FaTimes } from 'react-icons/fa';



enum providers {
  Github = "github",
  Bitbucket = "bitbucket"
}
const Modal = () => {
  const UseLoginContext = useContext(LoginContext)
  const { settings, loginProvider, user } = useIdentityContext()
  const emailMessage = JSON.stringify({
    name: user && user.user_metadata.full_name.split(' ')[0],
    message: `<p>Welcome to PrizeMi<p>
        <p>We are pleased to have you as part of elite software developers who pride themselves in doing the job and getting the right pay for it.</p>
        <p>Get Started on PrizeMi</p>`
  })
  const authenticate = async (value: providers) => {
    await UseLoginContext.dispatch({type:'loading'})
    await loginProvider(value)
    const isSignedUp = user && Buffer.from(user.role, 'base64').toString('utf8').split('_')[1]
    !isSignedUp && await axios.post('/.netlify/functions/send_mail', emailMessage)
  }

  
  return (
    <Container>
      <Heading> 
        <p>{UseLoginContext.state.action}</p>
        <FaTimes style={{fontSize:'1.5rem' , color:'#ffffff', margin:'5px'}} onClick={()=>UseLoginContext.dispatch({type:'close'})}/>
      </Heading>
      <Actions>
        {!UseLoginContext.state.loading && settings && settings.external.github && <Icon onClick={() => authenticate(providers.Github)}><FaGithub /><p>Github</p></Icon>}
        {!UseLoginContext.state.loading && settings && settings.external.bitbucket && <Icon onClick={() => authenticate(providers.Bitbucket)} ><FaBitbucket /><p>Bitbucket</p></Icon>}
        {UseLoginContext.state.loading && <p> Loading ...</p>}
      </Actions>
    </Container>
  )
}
export default Modal

const Container = styled.div`
  width:25%;
  position:fixed;
  border-radius:10px;
  top:30vh;
  background-color:#fff;
  height:30vh;
  z-index:+3;
  display:flex;
  flex-direction:column;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  @media(max-width:800px){
    width:80%;
    margin:0 10%;
    height:40vh;
  }
`;
const Heading = styled.div`
width:100%;
height:30%;
background-color:#6554C0;
border-radius:10px 10px 0px 0px;
display:flex;
align-items:center;
justify-content:space-between;
p{
  color:#ffffff;
  font-size:1.5rem;
  text-align:center;
  width:90%;
  margin-left:5%;
}
`;
const Actions = styled.div`
width:80%;
margin:0 10%;
height:70%;
display:flex;
border-radius:0px 0px 10px 10px;
justify-content:center;
align-items:center;
`;
const Icon  = styled.div`
  width:50%;
  height:100%;
  font-size:4rem;
  display:flex;
  color:#091E42;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  p{
    font-size:1rem;
  }
`;