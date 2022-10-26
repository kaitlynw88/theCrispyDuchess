import { Link } from "react-router-dom"
import Logo from "../assets/TheCrispyDuchessLogo1.png"

import { fab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fab, faInstagram, faTwitter)

const Header = ()=>{
    return(
        <>
            <nav>
                <img src={Logo}/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="Recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="AboutMe">About Me</Link>
                    </li>
                </ul>

                <div>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                </div>

            </nav>

            <h1>The Crispy Duchess</h1>
            <h2>The Art of Baking</h2>
        </>
    
    )
}

export default Header