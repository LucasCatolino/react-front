const OngCardDetails = ({ ong }) => {
    return ( 
        <div className="container">
            <div className="row align-items-center">
                <div className="col">

                    <div className="card text-white mb-3 mx-auto mainCard">
                        <div className="card-header ongHeader">
                            <h5>{ ong.name }</h5>
                            <div className="stars">
                                        <p className="text-center">TODO: etrellas { ong.rating }</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><u>TODO:</u> email</li>
                                <li className="list-group-item"><u>TODO:</u> telefono</li>
                                <li className="list-group-item"><u>TODO:</u> { ong.location }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OngCardDetails;