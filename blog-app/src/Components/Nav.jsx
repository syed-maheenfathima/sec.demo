import { Link } from "react-router-dom";
export default function Nav(){
    return(
    <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
  
    </div>
    )
}