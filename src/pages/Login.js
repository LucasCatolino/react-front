import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Login = () => {

    const { t } = useTranslation();

    return (
        <div className="home">
            <h1>{ t('mainTitle') }</h1>
            <div className="container-Login">
                <div className="form-floating item">
                    <input type="text" name="username" id="floatingName" className="form-control" placeholder="Username" />
                    <label>{ t('login.email') }</label>
                </div>
                <div className="form-floating item">
                    <input type="password" name="password" id="floatingPass" className="form-control" placeholder="Password" />
                    <label>{ t('login.email') }</label>
                </div>
                <div>
                    <label className="text-white">
                        <input name={ t('login.rememberme') } type="checkbox"/>
                    </label>
                </div>
                <div>
                    <input type="submit" value={ t('login.login') } className="btn btn-primary btn-lg"/>
                </div>
                <div>
                    <Link to='/' className="btn btn-info">{ t('login.registerAsNGO') }</Link>
                </div>
                <div>
                    <Link to='/' className="btn btn-info">{ t('login.registerAsAdopter') }</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;