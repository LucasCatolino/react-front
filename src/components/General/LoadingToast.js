const LoadingToast = ({ isPending }) => {
    return (
        <div className="container">
        { isPending &&
            <div className="row-4 mb-3 align-items-center justify-content-center">
                <div className="col">
                    <div className="alert alert-info d-flex align-items-center mx-auto" role="alert">
                        <div className="text-center">Loading</div>
                    </div>
                </div>
            </div> }
        </div>
    );
}
 
export default LoadingToast;