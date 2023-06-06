import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <>
      <Link to="/" className="back-link">
        Back
      </Link>
    </>
  );
};

export default BreadCrumbs;
