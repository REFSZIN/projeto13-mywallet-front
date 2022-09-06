import SignUp from '../components/SignUp/SignUp.js'
import React from 'react';
import styled from "styled-components"

export default function SignUpPage(){
  return(
    <Container>
      <SignUp/>
    </Container>
  )
}
export const Container = styled.aside`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: rgb(204,170,185);
    background: -moz-radial-gradient(circle, rgba(204,170,185,1) 0%, rgba(140,17,190,1) 57%);
    background: -webkit-radial-gradient(circle, rgba(204,170,185,1) 0%, rgba(140,17,190,1) 57%);
    background: radial-gradient(circle, rgba(204,170,185,1) 0%, rgba(140,17,190,1) 57%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ccaab9",endColorstr="#8c11be",GradientType=1);
`;