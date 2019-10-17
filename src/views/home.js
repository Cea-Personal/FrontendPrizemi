import React, {useState} from "react";
import styled from "styled-components";
import Typed from "react-typed";
import background from "../assests/picture.svg";
import { useIdentityContext } from "react-netlify-identity"
import {FaGithub, FaBitbucket, FaGoogle } from 'react-icons/fa'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  @media(max-width:800px){
    flex-direction:column;
    
  }
  @media(max-height:450px){
      flex-direction:row;
      align-items:center;
  }
`;
const Hero = styled.div`
  width: 40%;
  margin: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  h1 {
    color: rgb(74, 74, 125);
    font-size: 3em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 0;
    text-align: center;
    @media(max-width:800px){
        font-size:2.5em;
      }
  }
  p {
    font-size: 1.5em;
    margin-bottom: 5%;
    @media(max-height:450px){
        font-size:1em;
      }
  }
  @media(max-width:800px){
    width:90%;
  }
`;
const Icon = styled.div`
  background: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  margin: 0 5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-position: center;
  @media(max-width:800px){
    order:-1;
    height:25%;
    width:90%;
  }
  @media(max-height:450px){
    order:0;
    width:50%;
    background-size:100% 200%;
}
`;
const Details = styled.div`
  height: 30vh;
  width: 90%;
  margin-bottom:10%;
  display: flex;
  flex-direction:column; 
  text-align: center;
  margin-bottom: 2%;
  p {
    height: 100%;
  }
  @media(max-width:800px){
      height:40vh;
  }
`;
const Sign = styled.div`
 width:80%;
 margin-top:3vh;
 height:30%;
 border-radius:10px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 border: 2px solid rgb(30, 20, 93);
 align-items:center;
 h2{
     color:rgb(74, 74, 125);
     font-size:1.5em;
     @media(max-height:450px){
        font-size:1em
    }
 }
 @media(max-width:800px){
    height:25%;
}
@media(max-height:450px){
    height:25%;
}
`
const Socials = styled.div`
    display:flex;
    width:100%;
    margin-bottom:10%;
    justify-content:center;
    svg{
        font-size:2em;
       margin:0 3%;
       color: rgb(30, 20, 93);
`;

const Home = () => {
  const {settings,loginProvider,acceptInviteExternalUrl , isLoggedIn,user, logoutUser , isConfirmedUser } = useIdentityContext()
    const [show, setShow] = useState(false)
    const clicked = () => {
        setShow(true)
    }
    const authenticate = async(value) => {
      await loginProvider(value)
      Window.location = '/'
    }
    const invite = async (value ) => {
      await acceptInviteExternalUrl(value , user.token.access_token)
    }
    if (isConfirmedUser) user.role = 'interested'
    
  return (
    <Container>
      <Hero>
        <Details>
          {console.log(user)}
        <h1>PrizeMi </h1>
          <Typed
            strings={[
              `<p>Get your client needs <p>`,
              `<p>Break it down into features</p>`,
              `<p>Set your price rate based on features with PrizeMi</p>`,
              `<p>A feature-based price management system for freelance software developers </p>`
            ]}
            typespeed={200}
            fadeOut={true}
            fadeOutDelay={100}
            //   backDelay={200}
            startDelay={1000}
            showCursor={false}
            onComplete={clicked}
          />
        </Details>
     {show && <Sign>
            {!isLoggedIn &&
            <div>
            <h2>SIGN UP/LOGIN WITH </h2>
            <Socials>
            {settings && settings.external.github &&   <FaGithub onClick={() => authenticate('github')}/>}
            {settings && settings.external.bitbucket &&   <FaBitbucket onClick={() => authenticate('bitbucket')}/>}
            </Socials>
            </div>
            }
            {isLoggedIn &&
            <div>
              {user.role === 'interested'? <p>Thank you {user.user_metadata.full_name} for checking in. We will get you notified as soon as we launch.</p> : <p>Welcome {user.user_metadata.full_name}. Kindly check your email for further steps.</p>}
            <Socials>
              <p>INVITE A DEVELOPER</p>
            {settings && settings.external.google &&   <FaGoogle onClick={() => invite('google')}/>}
            {settings && settings.external.github &&   <FaGithub onClick={() => invite('github')}/>}
            {settings && settings.external.bitbucket &&   <FaBitbucket onClick={() => invite('bitbucket')}/>}
            </Socials>
            </div>
            }
        </Sign>}
      </Hero>
      <Icon>
        {isLoggedIn && <div>
          {console.log(user)}
          <span>Hello {user.user_metadata.full_name}</span>
          <button onClick={logoutUser}>Logout</button>
        </div>}

      </Icon>
    </Container>
  );
};

export default Home;
