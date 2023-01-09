import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";
import OngNavDetails from "../components/Ong/OngNavDetails";
import OngCardDetails from "../components/Ong/OngCardDetails";
import PetCardList from "../components/Pet/PetCardList";
import ReviewsCardList from "../components/Reviews/ReviewsCardList";
import LoadingToast from "../components/General/LoadingToast";
import ErrorToast from "../components/General/ErrorToast";

const OngDetails = () => {

    const { id } = useParams();
    const { data: ong, error, isPending } = useFetch('http://localhost:8000/ongs/' + id);
    const { data: pets, errorPets, isPendingPets } = useFetch('http://localhost:8000/pets/');
    const { data: reviews, errorReviews, isPendingReviews } = useFetch('http://localhost:8000/reviews/');
    const [showPets, setShowPets] = useState(true);
    const [showReviews, setShowReviews] = useState(false);
    
    return (
        <div>
            <ErrorToast error= { error }/>
            <LoadingToast isPending={ isPending }/>
            { ong &&
                <div>
                    <OngNavDetails ong={ ong } showPets={ showPets } setShowPets={ setShowPets } setShowReviews={ setShowReviews }/>
                    <OngCardDetails ong={ ong }/>
                    { showPets && pets &&
                       <PetCardList pets={ pets.filter((pet) => pet.ong === ong.name) } error={ errorPets } isPeding={ isPendingPets }/> }
                    { showReviews && reviews &&
                       <ReviewsCardList reviews={ reviews.filter((review) => review.ong === ong.name) } error={ errorReviews } isPeding={ isPendingReviews }/> }
                </div> }
        </div>
     );
}
 
export default OngDetails;