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
            <button>Create a Game!</button>
        </div>
        </>
    )
}