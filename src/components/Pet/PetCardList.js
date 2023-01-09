import PetCard from "./PetCard";
import ErrorToast from "../General/ErrorToast";
import LoadingToast from "../General/LoadingToast";

const PetCardList = ({ pets, error, isPending }) => {
    return ( 
        <div className="petsContainer-Pets">
            <ErrorToast error= { error }/>
            <LoadingToast isPending={ isPending }/>
            { pets && 
                pets.map((pet) => (
                    <PetCard pet= { pet } key= { pet.id }/>
                )) }
        </div>
     );
}
 
export default PetCardList;