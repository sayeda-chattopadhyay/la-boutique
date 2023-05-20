// import { Flex } from "../styles/Flex.styled";
// import { StyledContainer } from "../styles/Container.styled";
import { StyledBanner } from "../styles/Banner.styled";

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
        <button>Explore</button>
      </div>
      <div>
        <img src="./images/banner.jpg" alt="Banner" />
      </div>
    </StyledBanner>
  );
};

export default Banner;