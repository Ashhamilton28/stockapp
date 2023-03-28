import NavBar from "./NavBar";
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <NavBar />
            <h1>This is a Homepage page</h1>



            <div className='links'>

                <Link to="/dashboard">Dashboard</Link>


            </div>
        </div>
    )
}

export default Home;