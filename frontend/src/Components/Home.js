import {Link} from "react-router-dom"
export default function Home () {
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
            <Link to='/users/new' className="LoginLink">Login or Create an Account</Link>
        </div>
        </>
    )
}