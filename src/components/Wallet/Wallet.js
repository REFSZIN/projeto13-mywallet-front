import "./style.js";
import UserContext from "../../UserContext";
import { useContext,useEffect} from "react";
import React from 'react'
import {Main,Cabeçalho,Title,ConteinerInfo,SpanInfo,Conteiner,Registro,DataWalet,TitleWalet,ValorWalet,Boxs,Box,Entrada,Saida,SaldoReal,InfoSaldo,TitleSaldo} from "./style.js";
import {Link} from "react-router-dom";
export default function Wallet(){
    const {setLoad} = useContext(UserContext);
    useEffect(() => {
        setLoad(0);
    }, [setLoad]);

    const deleteHabit = (props) =>{
        let result = window.confirm('Are you sure you want to delete?');
        let message = result ?"DELETED":'UNDELETE';
        alert(message);
        if(message === "DELETED"){
        }
    };
    return(
        <Main>
            <Cabeçalho>
                <Title>Olá, Fulano</Title>
                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </Cabeçalho>
            {/* <ConteinerInfo>
                <SpanInfo>Não há registros de <br/>entrada ou saída</SpanInfo>
            </ConteinerInfo> */}
            <Conteiner>
                <Registro>
                    <DataWalet>23/03</DataWalet>
                    <Link to="/editentrada" >
                        <TitleWalet>Compras</TitleWalet>
                    </Link>
                    <Link to="/editsaida" >
                        <ValorWalet>500</ValorWalet>
                    </Link>
                        <ion-icon onClick={() => deleteHabit()} name="close-outline"></ion-icon>
                </Registro>
            </Conteiner>                
            <InfoSaldo>
                <TitleSaldo>SALDO</TitleSaldo>
                <SaldoReal>12321.05</SaldoReal>
            </InfoSaldo>
            <Boxs>
                <Link to="/entrada" >
                    <Box>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <Entrada>Nova <br/>entrada</Entrada>
                    </Box>
                </Link>
                <Link to="/saida" >
                    <Box>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <Saida>Nova<br/> saída</Saida>
                    </Box>
                </Link>
            </Boxs>
        </Main>
    );
};
