import {Link} from "react-router-dom"
import { store } from "../store"
import { useSelector, useDispatch } from "react-redux"
import {logIn, logOut} from '../loginSlice'
export default function Home () {
    const dispatch = useDispatch()
    const loggedIn = useSelector((state)=> state.login.loggedIn)
    function handleLogOut(){
        dispatch(logOut())
        console.log("USER LOGGED OUT")
        console.log(store.getState())
    }

    return(
        <>
        <h1>
            Welcome to J-Party!
        </h1>
        <br></br>
        <div>
            <Link to='/games'>
                <button className="HomePageButton">Play a Game!</button>
            </Link>
        </div>
        <br></br>
        <div>
            <Link to='/games/new'>
                <button className="HomePageButton">Create a Game!</button>
            </Link>
        </div>
        <br></br>
        <div>
            <Link to='/games/edit'>
                <button className="HomePageButton">Edit Your Games</button>
            </Link>
        </div>
        <br></br>
        { !loggedIn &&
        <div>
        <div>
            <Link to='/users' className="LoginLink">Login</Link>
        </div>
        <div>or</div>
        <div>
            <Link to='/users/new' className="LoginLink">Create an Account</Link>
        </div>
        </div>
        }
        { loggedIn &&
        <div>
        <h3>Logged in as {store.getState().login.username}</h3>
        <button className = "HomePageButton" onClick={handleLogOut}>Log Out</button>
        </div>

        }
        </>
    )
}