import styled from 'styled-components';

export const LogoRegis = styled.h1`
    width: 180px;
    height: 108.38px;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-top: 50px;
    margin-left: 20px;
`;
export const Logo = styled.img`
    width: 140px;
    height: 120px;
    left: 113px;
    top: 159px;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-left: 10px;
`;
export const Container = styled.nav`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    &:hover{
    filter: brightness(1.2);
    }
`;
export const Anime = styled.nav`
    animation: bounceInDown 1s;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const FormRegis = styled.form`
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
export const InputRegis = styled.input`
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
export const BtnRegis = styled.button`
    width: 303px;
    height: 45px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    background: #A328D6;
    border-radius: 4.63636px;
    margin-top: 5px;
    margin-bottom: 30px;
`;
export const SpanLink = styled.span`
    width: 232px;
    height: 17px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    &:hover{
    filter: brightness(1.2);
    }
`;