const ErrorToast = ({ error }) => {
    return (
        <div className="container">
            { error &&
                <div className="row-4 mb-3 align-items-center justify-content-center">
                    <div className="col">
                        <div className="alert alert-danger d-flex align-items-center mx-auto" role="alert">
                            <div className="text-center">
                                { error }
                            </div>
                        </div>
                    </div>
                </div> }
            </div>
    );
}
 
export default ErrorToast;