const ProductReviews = ({ reviews }) => {
  return (
    <>
      <div>
        {reviews.map((review, index) => {
          return (
            <div key={index}>
              <p>{review.description}</p>
              <p>Ratings: {review.rating} / 5</p>
              <h5>Customer Name: {review.username}</h5>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductReviews;
