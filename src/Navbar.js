import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand" href='/'>
                <img src={ require('./assets/img/logo.png') } className="imgNav" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
                    <li className="nav-item">
                        <Link to='/pets' className="navbar-brand nav-item active col-md-auto">{ t('navbar.pets') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ongs' className="navbar-brand nav-item active col-md-auto">{ t('navbar.ngos') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/petCares' className="navbar-brand nav-item active col-md-auto">{ t('navbar.petCares') }</Link>
                    </li>
                </ul>

                <hr className="d-md-none text-white-50"/>

                <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                    <li className="nav-item">
                        <Link to='/' className="navbar-brand nav-item active col-md-auto">{ t('navbar.login') }</Link>
                    </li>
                </ul>
            </div>

        </nav>
        
    );
}
 
export default Navbar;