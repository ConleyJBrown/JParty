import {Link} from "react-router-dom"
export default function Home () {
    return(
        <>
        <h1>
            Welcome to J-Party!
        </h1>
        <div>
            <Link to='/games'>
                <button>Play a Game!</button>
            </Link>
            <Link to='/games/new'>
                <button>Create a Game!</button>
            </Link>
        </div>
        <div>
            <Link to='/users/new'>Login or Create an Account</Link>
        </div>
        </>
    )
}