import styled from 'styled-components';

export const LogoSign = styled.h1`
    width: 180px;
    height: 178.38px;
`;
export const Anime = styled.nav`
    animation: fadeInUp 1s;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const FormSign = styled.form`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
`;
export const InputSign = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #323232;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 10px;
    &:hover{
    filter: brightness(1.08);
    box-shadow: 1px 1px 1px 1px #126BA5;
    }
`;
export const BtnSign = styled.button`
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-top: 5px;
    margin-bottom: 30px;
`;
export const SpanLink = styled.span`
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #323232;
    &:hover{
    filter: brightness(1.2);
    }
`;