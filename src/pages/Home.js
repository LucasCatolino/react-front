import { useTranslation } from 'react-i18next';
import PetList from "../components/Pet/PetList";
import useFetch from "../useFetch";
import LoadingToast from "../components/General/LoadingToast";
import ErrorToast from "../components/General/ErrorToast";

const Home = () => {

    const { t } = useTranslation();
    const { data:pets, isPending, error } = useFetch('http://localhost:8000/pets');

    return (
        <div className="home">
            <h1>{ t('mainTitle') }</h1>
            <h3>{ t('mainSubtitle') }</h3>
            <div className="mainContainer">
                <ErrorToast error= { error }/>
                <LoadingToast isPending={ isPending }/>
                { pets &&
                    <PetList pets={ (pets.filter((pet) => pet.size === 0)).slice(0, 3) } title={ t('home.firstCardTitle') + t('home.firstCardPhrase') }/> }
                { pets &&
                    <PetList pets={ (pets.filter((pet) => (pet.age === 2 && pet.type === 0))).slice(0, 3) } title={ t('home.secondCardTitle') + t('home.secondCardPhrase') }/> }
                { pets &&
                    <PetList pets={ (pets.filter((pet) => (pet.type === 1))).slice(0, 3) } title={ t('home.thirdCardTitle') + t('home.thirdCardPhrase') }/> }
                { pets &&
                    <PetList pets={ (pets.filter((pet) => (pet.type === 0))).slice(0, 3) } title={ t('home.forthCardTitle') + t('home.forthCardPhrase') }/> }
                { pets &&
                    <PetList pets={ (pets).slice(0, 3) } title={ t('home.fifthCardTitle') + t('home.fifthCardPhrase') }/> }
            </div>
        </div>
     );
}
 
export default Home;