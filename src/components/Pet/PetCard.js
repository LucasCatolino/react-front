import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
    return ( 
        <div className="card cardPet" key={pet.id}>
            <Link to={ `/pets/${pet.id}` }>
                <img src={ require('../../assets/img/test.jpg') } className="card-img-top img-PetCard" alt="Pet"/>
                <div className="card-body">
                    <h5 className="card-title">{ pet.name }</h5>
                    <p className="card-text">{ pet.age } años</p>
                </div>
            </Link>
        </div>
     );
}
 
export default PetCard;