import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function SignUp(){
    const [data, setData] = useState([]) 
    const[usernameField, setUsernameField] = useState("")
    const[passwordField, setPasswordField] = useState("")
    const[confirmPasswordField,setConfirmPasswordField] = useState("")
    const[emailField, setEmailField] = useState("")
    const navigate = useNavigate()
   
   
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:9000/users')
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    async function sendData(){

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(passwordField != confirmPasswordField){
            alert("Passwords do not match")
        }
        else{
            const username = usernameField.toUpperCase()
            const password = passwordField
            const email = emailField
            const newUserData = {username, password, email}
            console.log(newUserData)
            const response = await fetch('http://localhost:9000/users', {
                 method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':  'application/json'
                },
                body: JSON.stringify(newUserData)
            })
            if (response.status !== 201) {
            // handle error hered
            } 
            else {
                console.log(response.body)
                navigate('/', {replace: true })
            }
            
        }
        
      }


    return(
        <>
        <h1>Create a J-party Account</h1>
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
            <label> Confirm Password:
            <input type = "password" required
             value = {confirmPasswordField}
             onChange={(e) => setConfirmPasswordField(e.target.value)}
            />
            </label>
            <label> Email:
            <input type = "text"
             value = {emailField}
             onChange={(e) => setEmailField(e.target.value)}
            />
            </label>
            <input type = "submit"/>
        </form>
        <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
        </>

    )
    

}