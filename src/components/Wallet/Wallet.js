import "./style.js";
import UserContext from "../../UserContext";
import { useContext,useEffect} from "react";
import React from 'react'
import {MainHab} from "./style.js";

export default function MainHabit(){
    const {setLoad} = useContext(UserContext);
    useEffect(() => {
        setLoad(0);
    }, [setLoad]);

    return(
        <MainHab>

        </MainHab>
    );
};
