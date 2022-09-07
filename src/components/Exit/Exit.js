import "./style.js";
import React, { useEffect } from 'react'
import { Main,Title,Form,Input,Btn,Cabeçalho} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate  ,Link} from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Exit(){
    const navigate = useNavigate();
    const {localmenteLogado,postExit, load, setLoad,valorExit,descriçãoExit,setValorExit,setDescriçãoExit,loader,setLoader} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
    }, [localmenteLogado]);

    const createExit = (create) =>{
        create.preventDefault();
        setLoader(1);
        postExit()
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
            <Cabeçalho>
                <Link to="/wallet">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </Cabeçalho>
            <Title>Nova saída</Title>
            <Form onSubmit={createExit}>
                <Input disabled={!loader} type="email" value={valorExit} onChange={e => setValorExit(e.target.value)} placeholder="Valor"required ></Input>
                <Input disabled={!loader} type="password" value={descriçãoExit} onChange={e => setDescriçãoExit(e.target.value)} placeholder="Descrição" required></Input>
                <Btn disabled={load} >
                    {!load?`Salvar Saída`:<Loader/>}
                </Btn>
            </Form>
        </Main>
    );
};