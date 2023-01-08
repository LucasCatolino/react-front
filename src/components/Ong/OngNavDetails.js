import { Link } from "react-router-dom";

const OngNavDetails = ({ ong }) => {
    return ( 
        <div className="card bg-dark">
            <div className="card-body">
                <nav className="nav nav-pills nav-fill bg-light">
                            <Link to='/' className="nav-link active" aria-current="page">TODO: Mascotas</Link>
                            <Link to='/' className="nav-link active" aria-current="page">TODO: opiniones</Link>
                </nav>
            </div>
        </div>
     );
}
 
export default OngNavDetails;