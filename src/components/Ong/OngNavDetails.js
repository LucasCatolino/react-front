import { useTranslation } from "react-i18next";

const OngNavDetails = ({ showPets, setShowPets, setShowReviews }) => {
    
    const { t } = useTranslation();
    const handleClickPets = () => {
        setShowPets(true);
        setShowReviews(false);
    }
    const handleClickReviews = () => {
        setShowPets(false);
        setShowReviews(true);
    }

    return ( 
        <div className="card bg-dark">
            <div className="card-body">
            { showPets &&
                <nav className="nav nav-pills nav-fill bg-light">
                    <button className="nav-link active" aria-current="page" onClick={ handleClickPets }>{ t('ongDetails.pets') }</button>
                    <button className="nav-link" aria-current="page" onClick={ handleClickReviews }>{ t('ongDetails.reviews') }</button>
                </nav> }
            { !showPets &&
                <nav className="nav nav-pills nav-fill bg-light">
                    <button className="nav-link" aria-current="page" onClick={ handleClickPets }>{ t('ongDetails.pets') }</button>
                    <button className="nav-link active" aria-current="page" onClick={ handleClickReviews }>{ t('ongDetails.reviews') }</button>
                </nav> }
            </div>
        </div>
     );
}
 
export default OngNavDetails;