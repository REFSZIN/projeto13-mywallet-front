import  { ThreeDots } from  'react-loader-spinner'
import React from 'react'

export default function Loader(){
    return(
        <>
            <ThreeDots 
                color="#90BFFF"
                height={40} 
                width={90}
                margin={40}
                display="flex"
                align-items="center"
                justify-content="center"
            />
        </>
        );
    };