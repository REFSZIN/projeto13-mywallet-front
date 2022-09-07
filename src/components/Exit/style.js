import styled from 'styled-components';

export const Main  = styled.main`
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
export const Title  = styled.h2`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    position: fixed;
    top: 30px;
    left: 30px;
`;
export const Cabeçalho = styled.main`
    width: 100%;
    display: fixed;
    flex-direction: row;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:30px;
    left:80%;
`;
export const Form  = styled.form`
    font-style: normal;
    font-weight: 400;
    display: flex;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-bottom : 450px;
    animation: lightSpeedInRight 1s ;
`;
export const Input  = styled.input`
    width: 303px;
    height: 55px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 10px;
    &:hover{
    filter: brightness(1.08);
    box-shadow: 1px 1px 1px 1px #126BA5;
    }
`;
export const Btn  = styled.button`
    width: 306px;
    height: 46px;
    left: 25px;
    top: 238px;
    background: #A328D6;
    border-radius: 5px;
    margin-top: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;