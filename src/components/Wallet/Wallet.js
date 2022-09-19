import "./style.js";
import UserContext from "../../UserContext";
import { useContext,useEffect} from "react";
import React from 'react'
import {Main,Cabeçalho,Title, SpanInfo, ConteinerInfo ,Conteiner,Registro,DataWalet,TitleWalet,ValorWalet,Boxs,Box,Entrada,Saida,SaldoReal,InfoSaldo,TitleSaldo,ValorWaletEntry,SaldoRealRed} from "./style.js";
import {Link} from "react-router-dom";

export default function Wallet(){
    const {setLoad, deleteWallet, data, wallets, localmenteLogado,getWallet,setIdPut} = useContext(UserContext);
    let saldo = 0;
    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
        setLoad(0);
        getWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteHabit = (props) =>{
        let result = window.confirm('Tem certeza de que deseja excluir?');
        let message = result ?"DELETADO":'MANTIDO';
        alert(message);
        getWallet();
        if(message === "DELETADO"){
            deleteWallet(props);
            getWallet();
    };}

    for (let i = 0; i < wallets.length; i++) {
        if (wallets[i].true === true) {
            saldo += Number(wallets[i].valor);
        }
        else{
            saldo -= Number(wallets[i].valor);
        }}

    return(
        <Main>
            <Cabeçalho>
                <Title>Olá, {data.name}</Title>
                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </Cabeçalho>
                
                {wallets.length !== 0 
                    ? <>
                        <Conteiner>
                        {wallets.map((registro, i) => {
                            
                        return (
                            <Registro key={i}>
                                <DataWalet>{registro.date}</DataWalet>
                                <Link to="/edit" onClick={() => setIdPut(registro._id)}>
                                    <TitleWalet>{registro.description}</TitleWalet>
                                </Link>
                                    { registro.true === true ? <ValorWaletEntry>{registro.valor}</ValorWaletEntry> : <ValorWalet>{registro.valor}</ValorWalet>}
                                <ion-icon id={registro._id} onClick={() => deleteHabit(registro._id)} name="close-outline"></ion-icon>
                            </Registro>
                        )
                    })}
                        </Conteiner>
                        <InfoSaldo>
                            <TitleSaldo>SALDO</TitleSaldo>
                            {saldo >= 0 ? <SaldoReal>{saldo}</SaldoReal> : <SaldoRealRed>{saldo}</SaldoRealRed>}
                        </InfoSaldo>
                    </>
                :
                <ConteinerInfo>
                    <SpanInfo>Não há registros de <br/>entrada ou saída</SpanInfo>
                </ConteinerInfo>
            }
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
