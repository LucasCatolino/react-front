import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import PetCardList from '../components/Pet/PetCardList';
import LoadingToast from "../components/General/LoadingToast";
import ErrorToast from "../components/General/ErrorToast";

const Pets = () => {

    const { t } = useTranslation();
    const { data:pets, isPending, error } = useFetch('http://localhost:8000/pets');

    return (
        <div className="containerRow-Pets container-fluid">
            <ErrorToast error= { error }/>
            <LoadingToast isPending={ isPending }/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card filter-Pets">
                            <div className="card-body">
                                <div className="selectsContainer">
                                    <p>TODO</p>
                                    <p>Aca va el filtro de mascotas</p>
                                    <div className="form-floating">TODO</div>
                                    <div className="form-floating">TODO</div>
                                    <div className="form-floating">TODO</div>
                                    <div className="form-floating">TODO</div>
                                    <div className="applyFilter">
                                            <Link to='/pets' className="btn btn-primary btn-lg" aria-label="Close">{ t('pets.applyButton') }</Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <PetCardList pets={ pets }/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Pets;