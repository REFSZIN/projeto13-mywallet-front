import "./style.js";
import React, { useEffect } from 'react'
import { Main,Title,Form,Input,Btn,} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate  } from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function ExitEdit(){
    const navigate = useNavigate();
    const {localmenteLogado,postExit,load,setLoad,valorExitEdit,descriçãoExitEdit,setValorExitEdit,setDescriçãoExitEdit,loader,setLoader} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
    }, [localmenteLogado]);

    const createExitEdit = (create) =>{
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
            <Title>Editar saída</Title>
            <Form onSubmit={createExitEdit}>
                <Input disabled={!loader} type="email" value={valorExitEdit} onChange={e => setValorExitEdit(e.target.value)} placeholder="Valor"required ></Input>
                <Input disabled={!loader} type="password" value={descriçãoExitEdit} onChange={e => setDescriçãoExitEdit(e.target.value)} placeholder="Descrição" required></Input>
                <Btn disabled={load} >
                    {!load?`Atualizar Saída`:<Loader/>}
                </Btn>
            </Form>
        </Main>
    );
};