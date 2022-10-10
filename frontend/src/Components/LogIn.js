import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {store} from '../store';
import { logIn, logOut } from '../loginSlice';
import { useNavigate } from 'react-router-dom';



export default function LogIn(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState([]) 
    const [usernameField, setUsernameField] = useState("")
    const [passwordField, setPasswordField] = useState("")
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:9000/users')
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const username = usernameField.toUpperCase()
        const password = passwordField;
        console.log("sending get user fetch")
        const response = await fetch(`http://localhost:9000/users/${username}`)
        const data = await response.json()
        console.log(data)
        if(!data){
            alert("username or password does not match information on file")
        }
        else{
            if(data[0].password != passwordField){
                alert("username or password does not match information on file")
            }
            else{
                alert(`Welome back ${username}`)
                dispatch(logIn(username))
                console.log("USER LOGGED IN")
                console.log(store.getState())
                navigate('/', {replace: true })
            }
        }



    }


    return(
        <>
        <h1>Login to your J-Party Account</h1>
        <form onSubmit={handleSubmit}>
            <label>Username:
            <input type="text" required 
            value = {usernameField}
            onChange={(e) => setUsernameField(e.target.value)}
            />
            </label>
            <label> Password:
            <input type = "password" required
            value = {passwordField}
            onChange={(e) => setPasswordField(e.target.value)}
            />
            </label>
            <input type = "submit"/>
        </form>
        </>

    )
    

}