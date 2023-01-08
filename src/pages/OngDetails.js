import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import OngNavDetails from "../components/Ong/OngNavDetails";
import OngCardDetails from "../components/Ong/OngCardDetails";
import PetCardList from "../components/Pet/PetCardList";

const OngDetails = () => {

    const { id } = useParams();
    const { data: ong, error, isPending } = useFetch('http://localhost:8000/ongs/' + id);
    const { data: pets, errorPets, isPendingPets } = useFetch('http://localhost:8000/pets/');
    
    return (
        <div>
            { isPending && 
                <div>Loading...</div> }
            { error && 
                <div>
                    <p>{ error }</p>
                    <Link to="/">Back</Link>
                </div>
            }
            { ong &&
                <div>
                    <OngNavDetails ong={ ong }/>
                    <OngCardDetails ong={ ong }/>
                    { isPendingPets && 
                        <div>Loading...</div> }
                    { errorPets && 
                            <div>{ errorPets }</div>
                    }
                    { pets &&
                       <PetCardList pets={ pets.filter((pet) => pet.ong === ong.name) }/> }
                </div> }
        </div>
     );
}
 
export default OngDetails;