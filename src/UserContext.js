import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;
export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);
    const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit` 
    const [wallets, setWallets] = useState([]);

    const localmenteLogado = () => {
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD && localStorage.length > 0) {
            setLoad(1);
            axios.post(`${URL}/auth/login/`,
                {
                    email: data.email,
                    password: data.password,
                })
            .then(res => {
                setToken(res.data.token);  
                setName(res.data.name);   
                setData(res.data);
            })
            .catch(err => {
                alert(err.response.data.message);
                setLoad(0);
            });
        }
    }
    const postSign = async () => {
        const params = 
        {
            email: email,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-in/`, params);
            req.then(res => {
                setToken(res.data.token);
                setName(res.data.name);   
                setLoad(0);
                setData(res.data)
                localStorage.setItem("user",JSON.stringify(res.data))
            })
            req.catch(err => {
                alert(err.response.data.message);
                setLoad(0);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postSignUp = async () => {
        const params = {
            email: email,
            name: name,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-up/`, params);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err.response.user);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const getWallet = async (req, res) => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/habits`, headers);
            req.then(res => {

            })
            .catch(err => {
                alert(err.response.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postExit = async () => {
        const params = {
            email: email,
            name: name,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-up/`, params);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err.response.user);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postEntry = async () => {
        const params = {
            email: email,
            name: name,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-up/`, params);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err.response.user);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const putWallet = (props) => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.post(`${URL}/habits/${props}/uncheck`,{}, headers);
            req.then(res => {
                return res;
            })
                .catch(err => {
                    alert(err.response.data);
                });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const deleteWallet = (props) => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.post(`${URL}/habits/${props}/uncheck`,{}, headers);
            req.then(res => {
                return res;
            })
                .catch(err => {
                    alert(err.response.data);
                });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    return (
        <UserContext.Provider 
            value={{
                postSign,postSignUp,token, setToken,data, setData,email,setEmail,user,setUser,
                password,setPassword,load,setLoad,localmenteLogado,deleteWallet,putWallet,
                getWallet,wallets,setWallets,postEntry,postExit,
            }}>
            {props.children}
        </UserContext.Provider>
    )}