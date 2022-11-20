import MainImage from "assets/images/star.png";
import { Review } from "types/review";

import "./styles.css";

type Props = {
  reviews: Review[];
};

const ReviewCard = ({ reviews }: Props) => {
  return (
    <>
      <div className="review-card">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="review-card-top-container">
              <img src={MainImage} alt="star" />
              <h6>{review.user.name}</h6>
            </div>
            <div className="review-card-bottom-container">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewCard;
