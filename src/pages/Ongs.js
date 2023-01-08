import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import OngCard from '../components/Ong/OngCard';
import useFetch from "../useFetch";

const Ongs = () => {
    const { t } = useTranslation();
    const { data:ongs, isPending, error } = useFetch('http://localhost:8000/ongs');
    
    return (
        <div className="containerRow-Pets container-fluid">
            { error &&
                <div>{ error }</div>}
            { isPending &&
                <div>Loading...</div>}
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card filter-Pets">
                            <div className="card-body">
                                <div className="selectsContainer">
                                    <p>TODO</p>
                                    <p>Aca va el filtro de ongs</p>
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
                        <div className="ongsContainer-Ongs">
                            { ongs && 
                                ongs.map((ong) => (
                                    <OngCard ong= { ong } key= { ong.id }/>
                                )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Ongs;