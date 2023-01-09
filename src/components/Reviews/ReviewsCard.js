const ReviewsCard = ({ review }) => {
    return ( 
        <div className="card ratingCard">
            <div className="card-header ratingHeader">
                <h5 className="card-title">{ review.author }</h5>
                <div>
                    <span className="fa fa-star fa-lg checked"> TODO: { review.rating } (estrellas)</span>
                </div>
            </div>
            <div className="card-body text-center">
                <p><b><i>"{ review.comment}"</i></b></p>
            </div>
        </div>
     );
}
 
export default ReviewsCard;