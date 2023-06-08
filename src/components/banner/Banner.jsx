
import { StyledBanner } from "../styles/Banner.styled";
import {StyledButton} from "../styles/Button.styled";

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h4>Discover a World of Amazing Products</h4>
        <h2>Welcome to Our Online Store!</h2>
        <p>
          la-boutique offers a wide range of high-quality products, carefully
          curated to cater to your needs and preferences. Whether you're looking
          for the latest fashion trends, electronics, home essentials, or unique
          gifts, we have something for everyone
        </p>
        <StyledButton>Explore</StyledButton>
      </div>
      <div className="banner-image">
        <img src="./images/banner.jpg" alt="Banner" />
      </div>
    </StyledBanner>
  );
};

export default Banner;
