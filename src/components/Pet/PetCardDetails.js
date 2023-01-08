import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PetCardDetails = ({ pet }) => {

    const { t } = useTranslation();
    
    return ( 
        <div className="card-PetCardDetails mb-3 mx-auto">
            <img src={ require('../../assets/img/test.jpg') } className="card-img-top img-PetCardDetails" alt="Pet"/>
            <div className="card-body">
                <h5 className="card-title">{ pet.name }</h5>
                <ul className="list-group list-group-flush">

                    {/* Animal */}
                    <li className="list-group-item"><u>{ t('petCardDetails.animal') }:</u> TODO</li>

                    {/* Raza */}
                    <li className="list-group-item"><u>{ t('petCardDetails.breed') }:</u> TODO</li>

                    {/* Edad */}
                    <li className="list-group-item"><u>{ t('petCardDetails.age') }:</u> {pet.age}</li>

                    {/* Tamaño */}
                    <li className="list-group-item"><u>{ t('petCardDetails.size') }:</u> TODO</li>

                    {/* Sexo */}
                    <li className="list-group-item"><u>{ t('petCardDetails.sex') }:</u> TODO</li>
                    
                    {/* Temperamento */}
                    <li className="list-group-item"><u>{ t('petCardDetails.temper') }:</u> TODO</li>
                    
                    {/* Tratamientos */}
                    <li className="list-group-item"><u>{ t('petCardDetails.treatments') }:</u> TODO</li>

                    {/* ONG */}
                    <li className="list-group-item">
                            <Link to='/' className="link-primary">{ t('petCardDetails.goToProfile') }: TODO</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default PetCardDetails;