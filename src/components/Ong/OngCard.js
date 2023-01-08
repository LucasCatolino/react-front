import { Link } from "react-router-dom";

const OngCard = ({ ong }) => {
    return ( 
        <div className="card cardOng-Ongs" key={ong.id}>
            <Link className="stretched-link" to={ `/ong/${ong.id}` }/>
            <div className="card-body">
                <h5 className="card-title">TODO: nombre { ong.name }</h5>
                <p className="card-text">TODO: ubicacion { ong.location }</p>
                <i className="fa fa-star fa-lg checked"/>
                <p>TODO: { ong.rating } (estrellas)</p>
            </div>
        </div>
     );
}
 
export default OngCard;