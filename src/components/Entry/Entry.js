import "./style.js";
import React, { useEffect } from 'react'
import { Main,Title,Form,Input,Btn,Cabeçalho } from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Entry(){
    const navigate = useNavigate();
    const {localmenteLogado,postEntry, load, setLoad,valorEntry,descEntry,setValorEntry,setDescEntry,loader,setLoader} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
        setLoad(0);
        setLoader(1);
        setDescEntry('');
        setValorEntry('');
    }, []);

    const createEntry = (create) =>{
        create.preventDefault();
        setLoader(1);
        setLoad(0);
        postEntry()
        .then(() => {
            setLoad(1);
            navigate("/wallet");
        })
        .catch(e => {
            setLoad(0);
            alert(e);
        });
    };

    return(
        <Main>
            <Cabeçalho>
                <Link to="/wallet">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
                <Title>Nova Entrada</Title>
            </Cabeçalho>
            <Form onSubmit={createEntry}>
                <Input disabled={!loader} type="number" value={valorEntry} onChange={e => setValorEntry(e.target.value)} placeholder="Valor"required ></Input>
                <Input disabled={!loader} type="text" value={descEntry} onChange={e => setDescEntry(e.target.value)} placeholder="Descrição" required></Input>
                <Btn disabled={load} >
                    {!load?`Salvar Entrada`:<Loader/>}
                </Btn>
            </Form>
        </Main>
    );
};