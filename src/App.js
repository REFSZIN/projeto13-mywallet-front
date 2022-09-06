import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";
import { UserProvider } from './UserContext.js';

export default function App (){
return (
    <UserContext.Provider value={UserContext}>
        <UserProvider>
            <BrowserRouter>
            <ResetCSS/>
                <Routes>
                    <Route path="/" element={< />}/>
                    <Route path="/cadastro" element={< />}/>
                    <Route path="/wallet" element={</>}/>
                    <Route path="/saida" element={</>}/>
                    <Route path="/entrada" element={< />}/>
                </Routes> 
            </BrowserRouter>
        </UserProvider>
    </UserContext.Provider>
    );
};