import styled from "styled-components";
import { Link } from "react-router-dom";

// export const StyledNavBar = styled.nav`
//   display: flex;
//   gap: 20px;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   border: 1px solid yellow;

//   a {
//     text-decoration: none;
//     color: #fff;
//     font-size: 1.2rem;
//     transition: 0.2s;
//   }

//   .ms-auto {
//     padding: 20px;
//   }

//   a.active {
//     font-weight: bold;
//   }

//   .link-nav {
//     padding: 20px;
//     text-decoration: none;
//   }

//   & a:hover {
//     background-color: #fff;
//     color: #2b3452;
//   }
// `;
export const StyledBrand = styled.div`
  font-size: 2rem;
  font-weight: bold;
  // text-decoration: none;
  // underline: none;
  font-family: "Noto Serif", "Poppins", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0 10px;
  color: white;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCartLink = styled(StyledLink)`
  display: flex;
  align-items: center;

  .cart-icon {
    margin-right: 5px;
  }
`;
