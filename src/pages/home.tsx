import { FaFile, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="userName">
            <main>
                <h1>Naveen Bahunadham</h1>
                <div>
                    <Link to="https://github.com/naveenbabu4"><FaGithub /></Link>
                    <Link to="https://www.instagram.com/naveen_bahunadham"><FaInstagram /></Link>
                    <Link to="https://www.linkedin.in/in/naveenbahunadham"><FaLinkedinIn /></Link>
                    <Link to="/"><FaFile /></Link>
                </div>
            </main>
            <aside>
            </aside>

        </div>
    )
}

export default Home