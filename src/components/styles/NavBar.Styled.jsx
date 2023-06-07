import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid yellow;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: 0.2s;
  }

  .ms-auto {
    padding: 20px;
  }

  a.active {
    font-weight: bold;
  }

.link-nav{
  padding: 0 20px;
  text-decoration: none;
}

  & a:hover {
    background-color: #fff;
    color: #2b3452;
  }
`;
