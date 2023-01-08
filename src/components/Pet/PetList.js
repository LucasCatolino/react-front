import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import PetCard from "./PetCard";

const PetList = ({ pets, title }) => {

    const { t } = useTranslation();

    return ( 
        <div className="card categoryCard" key={title}>
            <div className="card-header">
                <h5 className="card-title">{ title }</h5>
                <Link to='/' className="btn btn-dark">{ t('moreInfoButton') }</Link>
            </div>
            <div className="card-body">
                <div className="container-PetList">
                    {pets.map((pet) => (
                        <PetCard pet= { pet } key= { pet.id }/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default PetList;