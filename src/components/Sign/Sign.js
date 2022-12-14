import "./style.js";
import React from 'react'
import Loader from "../Loader/Loader"
import UserContext from "../../UserContext.js"
import {Container, Anime,LogoSign,Logo,FormSign,InputSign,BtnSign,SpanLink} from "./style.js";
import {useContext, useEffect} from "react";
import logo from "../../assets/images/logo.ico";
import {Link,useNavigate} from "react-router-dom";

export default function Sign(){
    const {email,setEmail,password,setPassword,postSign,load,setLoad,localmenteLogado,loader,setLoader} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        localmenteLogado();
        setLoad(0);
        setLoader(1);
    }, []);

    function login(event) {
        event.preventDefault();
        setLoad(1);
        setLoader(0);
        postSign()
        .then(() => {
                setLoad(0);
                setTimeout(() => {
                navigate("/wallet");
                }, 2000);
            })
            .catch(e => {
                setLoad(0);
                navigate("/");
            });
    }
    return(
        <Anime>
            <Container>
                <LogoSign>MyWallet</LogoSign>
                <Logo src={logo} alt="MyWallet Logo"/>
            </Container>
            <FormSign onSubmit={login}>
                <InputSign type="email" disabled={load} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></InputSign>
                <InputSign type="password" disabled={load} value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></InputSign>
                <BtnSign disabled={load} type="submit">
                    { !loader ? <Loader/> :`Entrar`}
                </BtnSign>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    );
};