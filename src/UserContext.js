import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";
const UserContext = createContext();
export default UserContext;
export function UserProvider (props){


    return (
        <UserContext.Provider 
            value={{
            }}>
            {props.children}
        </UserContext.Provider>
    )}