const PetCaresCard = ({ title, img, subtitle1, texts1, subtitle2, texts2 }) => {

    const t1 = (texts1 != null) ? texts1.map((text) => <li key={text}>{ text }</li>) : null;
    const t2 = (texts2 != null) ? texts2.map((text) => <li key={text}>{ text }</li>) : null;

    return ( 
        <div className="row row-PetCaresCard">
            <div className="card">
                <div className="container">
                    <div className="row container-PetCares">
                        <div className="card-header text-center">
                            <h1 className="blackLetters">{ title }</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <img src={ require('../../assets/img/' + img) } width="400" height="400" alt="Pet cares"/>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h3 className="blackLetters">{ subtitle1 }</h3>
                                <ul className="list-group">
                                    { t1 }
                                </ul>
                                { subtitle2 &&
                                    <div>
                                        <h3 className="blackLetters">{ subtitle2 }</h3>
                                        <ul className="list-group">
                                        { t2 }
                                        </ul>
                                    </div> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PetCaresCard;