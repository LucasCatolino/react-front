import PetCard from "./PetCard";

const PetCardList = ({ pets }) => {
    return ( 
        <div className="petsContainer-Pets">
            { pets && 
                pets.map((pet) => (
                    <PetCard pet= { pet } key= { pet.id }/>
                )) }
        </div>
     );
}
 
export default PetCardList;