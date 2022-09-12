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
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [load,setLoad] = useState(0);
    const [wallets, setWallets] = useState([]);
    const [valorExit , setValorExit] = useState('');
    const [descExit , setDescExit] = useState('');
    const [valorEntry , setValorEntry] = useState('');
    const [descEntry , setDescEntry] = useState('');
    const [valorPut , setValorPut] = useState('');
    const [descPut , setDescPut] = useState('');
    const [loader,setLoader] = useState(1);
    const [idPut,setIdPut] = useState('');
    const URL ="http://localhost:5000";

    const localmenteLogado = () => {
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD || localStorage.length > 0) {
            setLoad(1);
            axios.post(`${URL}/auth/sign-in`,
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
                setLoad(0);
            });
        }
    }
    const postSign = async () => {
        const body = 
        {
            email: email,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-in`, body);
            req.then(res => {
                setToken(res.data.token);
                setName(res.data.name);
                setLoad(0);
                setData(res.data);
                localStorage.setItem("user",JSON.stringify(res.data));
            })
            req.catch(err => {
                alert(err);
                setLoad(0);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postSignUp = async () => {
        const params = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }

        try {
            const req = axios.post(`http://localhost:5000/auth/sign-up`, params);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const getWallet = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/wallet`, headers);
            req.then(res => {
                setWallets(res.data)
            })
            .catch(err => {
                alert(err.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postExit = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        const body  = {
            valor: valorExit,
            description: descExit,
        }
        try {
            const req = axios.post(`${URL}/exit`, body , headers);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const postEntry = async () => {
        const body  = {
            valor: valorEntry,
            description: descEntry,
        }

        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.post(`${URL}/entry`, body , headers);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    const putWallet = () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        const body  = {
            valor: valorPut,
            description: descPut
        }
        try {
            const req = axios.put(`${URL}/edit/wallet/${idPut}`, body, headers);
            req.then(res => {
                return true;
            })
            .catch(err => {
                alert(err.data);
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
            const req = axios.delete(`${URL}/del/wallet/${props}`, headers);
            req.then(res => {
                return res;
            })
                .catch(err => {
                    alert(err.data);
                });
        } 
        catch (error) {
            throw new Error(error);
        }
    }
    
    return (
        <UserContext.Provider 
            value={{ 
                token, setToken, data, setData, email, setEmail, name, setName,
                password,setPassword, confirmPassword, setConfirmPassword, load, setLoad, 
                wallets, setWallets, valorExit , setValorExit , descExit , setDescExit, valorEntry , setValorEntry ,
                descEntry , setDescEntry, valorPut , setValorPut , descPut , setDescPut , localmenteLogado , postSign,
                postSignUp, getWallet,postExit, postEntry, putWallet, deleteWallet, loader,setLoader,idPut,setIdPut
            }}>
            {props.children}
        </UserContext.Provider>
    )}