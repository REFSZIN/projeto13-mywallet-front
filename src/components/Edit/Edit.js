import "./style.js";
import React, { useEffect } from 'react'
import { Main,Title,Form,Input,Btn,Cabeçalho} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate,Link  } from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Edit(){
    const navigate = useNavigate();
    const {localmenteLogado,putWallet,load,setLoad,setValorPut,setDescPut,descPut,valorPut,loader,setLoader} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
        setValorPut('');
        setDescPut('');
        setLoader(1);
    }, []);

    const createEdit =  async (create) =>{
        create.preventDefault();
        setLoader(0);
        setLoad(0);
        putWallet();
        navigate("/wallet");
    };
    return(
        <Main>
            <Cabeçalho>
                <Link to="/wallet">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
                <Title>Editar saída</Title>
            </Cabeçalho>
            <Form onSubmit={createEdit}>
                <Input disabled={!loader} type="number" value={valorPut} onChange={e => setValorPut(e.target.value)} placeholder="Valor" required ></Input>
                <Input disabled={!loader} type="text" value={descPut} onChange={e => setDescPut(e.target.value)} placeholder="Descrição" required></Input>
                <Btn disabled={!load} >
                    {load?`Atualizar Saída`:<Loader/>}
                </Btn>
            </Form>
        </Main>
    );
};