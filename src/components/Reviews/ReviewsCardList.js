import ReviewsCard from "./ReviewsCard";
import ErrorToast from "../General/ErrorToast";
import LoadingToast from "../General/LoadingToast";

const ReviewsCardList = ({ reviews, error, isPending }) => {
    return (
        <div className="reviewsContainer">
            <ErrorToast error= { error }/>
            <LoadingToast isPending={ isPending }/>
            { reviews && 
                reviews.map((review) => (
                    <ReviewsCard review= { review } key= { review.id }/>
                )) }
        </div>
    );
}
 
export default ReviewsCardList;