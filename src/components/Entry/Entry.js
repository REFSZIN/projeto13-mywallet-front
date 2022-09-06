import "./style.js";
import React, { useEffect } from 'react'
import { Main,Title,Form,Input,Btn, } from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate  } from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Entry(){
    const navigate = useNavigate();
    const {localmenteLogado,postEntry, load, setLoad,valorExit,descriçãoExit,setValorExit,setDescriçãoExit,loader,setLoader} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
    }, [localmenteLogado]);

    const createEntry = (create) =>{
        create.preventDefault();
        setLoader(1);
        postEntry()
        .then(() => {
            setLoad(0);
            navigate("/wallet");
        })
        .catch(e => {
            setLoad(0);
            alert(e.response.user.message);
        });
    };

    return(
        <Main>
            <Title>Nova Entrada</Title>
            <Form onSubmit={createEntry}>
                <Input disabled={!loader} type="email" value={valorExit} onChange={e => setValorExit(e.target.value)} placeholder="Valor"required ></Input>
                <Input disabled={!loader} type="password" value={descriçãoExit} onChange={e => setDescriçãoExit(e.target.value)} placeholder="Descrição" required></Input>
                <Btn disabled={load} >
                    {!load?`Salvar Entrada`:<Loader/>}
                </Btn>
            </Form>
        </Main>
    );
};