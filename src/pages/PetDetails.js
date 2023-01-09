import { useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import PetCardDetails from "../components/Pet/PetCardDetails";
import useFetch from "../useFetch";
import LoadingToast from "../components/General/LoadingToast";
import ErrorToast from "../components/General/ErrorToast";

const PetDetails = () => {

    const { id } = useParams();
    const { t } = useTranslation();
    const { data: pet, error, isPending } = useFetch('http://localhost:8000/pets/' + id);
/*
    const navigate = useNavigate();


    const handleClick = () => {
        fetch('http://localhost:8000/pets/' + pet.id, {
            method: 'DELETE'
        }).then( () => {
            navigate('/');
        })
    }
*/
    return ( 
        <div className="container-PetDetails">
            <ErrorToast error= { error }/>
            <LoadingToast isPending={ isPending }/>
            {/* pet && 
                <article>
                    <h2>{ pet.name }</h2>
                    <p>ONG: { pet.ong }</p>
                    <p>Edad: { pet.age }</p>
                    <div>{ pet.description ? pet.description : 'No description available' }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article> */}
            { pet &&
                <div className="row row-PetDetails">
                    <div className="col col-PetDetails">
                        <PetCardDetails pet= { pet }/>
                    </div>
                    <div className="col col-PetDetails">
                        <h3>{ t('petDetails.acceptingApplications') }</h3>
                        <div className="row mb-3 text-center">
                            <div className="col col-PetDetails">
                                <Link to="/" className="btn btn-primary">{ t('petDetails.loginForApplication') }</Link>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
     );
}
 
export default PetDetails;