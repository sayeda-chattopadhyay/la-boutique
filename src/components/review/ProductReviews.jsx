
const ProductReviews = ({reviews}) => {
  return (
    <div>{reviews.map((review, index )=>{
      return (
        <div key={index}>
          <p>{review.description}</p>
          <h3>By{review.username}</h3>
          <p>{review.rating}</p>
        </div>
      )
    })}
    </div>
  )
}

export default ProductReviews