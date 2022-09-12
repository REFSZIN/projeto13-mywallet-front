import styled from 'styled-components';

export const Main = styled.main`
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
export const Cabeçalho = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:30px;
    animation: headShake 1s ;
`;
export const Title = styled.main`
    width: 141px;
    height: 31px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;
export const ConteinerInfo = styled.main`
    width: 300px;
    height: 340px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 5px 5px 0px 0px;
    animation: fadeInDown 2s ;
`;
export const SpanInfo = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`;
export const Conteiner = styled.main`
    width: 300px;
    height: 320px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: nowrap;
    border-radius: 5px 5px 0px 0px;
    animation: fadeInDown 2s ;
`;
export const Registro = styled.main`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 40px;
    position: relative;
`;
export const SaldoReal = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #03AC00;
`;
export const SaldoRealRed = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #C70000;
`;
export const InfoSaldo = styled.main`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 300px;
    height: 36px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    border-radius: 0px 0px 5px 5px; 
    animation: fadeInRight 1s ;
`;
export const TitleSaldo = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
`;

export const DataWalet = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    margin-left: 10px;
    margin-right: 10px;
`;
export const TitleWalet = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 5px;
`;

export const ValorWalet = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #C70000;
    margin-left: 10px;
	position: sticky;
`;
export const ValorWaletEntry = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #03AC00;
    margin-left: 10px;
	position: sticky;
`;
export const Boxs = styled.main`
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: relative;
    bottom: -20px;
`;
export const Box = styled.main`
    width: 135px;
    height: 114px;
    left: 25px;
    top: 537px;
    background: #A328D6;
    border-radius: 5px;
    margin-right: 10px;
    animation: bounceInUp 2s ;
`;
export const Entrada = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 10px;
`;
export const Saida = styled.main`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 10px;
`;