import { useTranslation } from 'react-i18next';
import PetCaresCard from "../components/PetCares/PetCaresCard";

const PetCares = () => {

    const { t } = useTranslation();

    const textEmasculate = [t('petCares.emasculateBenefitsl1'), t('petCares.emasculateBenefitsl2'), t('petCares.emasculateBenefitsl3'), t('petCares.emasculateBenefitsl4'), t('petCares.emasculateBenefitsl5'), t('petCares.emasculateBenefitsl6'), t('petCares.emasculateBenefitsl7'), t('petCares.emasculateBenefitsl8')];
    const textCatVaccines = [t('petCares.catVaccinesl1'), t('petCares.catVaccinesl2')];
    const textCatsRemoveParasites = [t('petCares.catsRemoveParasitesl1')];
    const textDogsVaccines = [t('petCares.dogsVaccinesl1'), t('petCares.dogsVaccinesl2'), t('petCares.dogsVaccinesl3'), t('petCares.dogsVaccinesl4')];
    const textDogsRemoveParasites = [t('petCares.dogsRemoveParasitesl1')];

    return ( 
        <div className="container container-PetCares">
            <PetCaresCard title={ t('petCares.emasculate') } img="petCare.png" subtitle1={ t('petCares.emasculateBenefits') } texts1={ textEmasculate }/>
            <PetCaresCard title={ t('petCares.catsVaccinesRemoveParasites') } img="vaccine.png" subtitle1={ t('petCares.vaccines') } texts1={ textCatVaccines } subtitle2={ t('petCares.removeParasites') } texts2={ textCatsRemoveParasites }/>
            <PetCaresCard title={ t('petCares.dogsVaccinesRemoveParasites') } img="vaccine.png" subtitle1={ t('petCares.vaccines') } texts1={ textDogsVaccines } subtitle2={ t('petCares.removeParasites') } texts2={ textDogsRemoveParasites }/>
        </div>
     );
}
 
export default PetCares;