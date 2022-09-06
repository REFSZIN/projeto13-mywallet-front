import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";
import { UserProvider } from './UserContext.js';
import EntryPage from "./Pages/EntryPage.js";
import ExitPage from "./Pages/ExitPage.js";
import SignInPage from "./Pages/SignInPage.js";
import SignUpPage from "./Pages/SignUpPage.js";
import WalletPage from "./Pages/WalletPage.js";
import EntryPageEdit from "./Pages/EntryPageEdit.js";
import ExitPageEdit from "./Pages/ExitPageEdit.js";

export default function App (){
return (
    <UserContext.Provider value={UserContext}>
        <UserProvider>
            <BrowserRouter>
            <ResetCSS/>
                <Routes>
                    <Route path="/" element={<SignInPage />}/>
                    <Route path="/cadastro" element={<SignUpPage />}/>
                    <Route path="/wallet" element={<WalletPage/>}/>
                    <Route path="/saida" element={<ExitPage/>}/>
                    <Route path="/entrada" element={<EntryPage/>}/>
                    <Route path="/editentrada" element={<EntryPageEdit/>}/>
                    <Route path="/editsaida" element={<ExitPageEdit/>}/>
                </Routes> 
            </BrowserRouter>
        </UserProvider>
    </UserContext.Provider>
    );
};