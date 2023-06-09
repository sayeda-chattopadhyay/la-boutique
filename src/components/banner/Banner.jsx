import { StyledBanner } from "../styles/Banner.styled";
//import { StyledButton } from "../styles/Button.styled";
//import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h5>Discover a World of Amazing Products</h5>
        <h1>Welcome to Our Online Store!</h1>
        <p>
          la-boutique offers a wide range of high-quality products, carefully
          curated to cater to your needs and preferences. Whether you're looking
          for the latest fashion trends, electronics, home essentials, or unique
          gifts, we have something for everyone
        </p>
        {/* <Link to="/src/components/card/ProductCard.jsx">
          <StyledButton>Explore</StyledButton>
        </Link> */}
      </div>
      <div className="banner-image">
        <img src="./images/banner.jpg" alt="Banner" />
      </div>
    </StyledBanner>
  );
};

export default Banner;
