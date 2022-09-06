import "./style.js";
import React, { useEffect } from 'react'
import { MainToda } from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";

export default function Exit(){
    const {localmenteLogado,getToday} = useContext(UserContext);
    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
            getToday();
        }
    }, [localmenteLogado,getToday]);

    return(
        <MainToda>

        </MainToda>
    );
};