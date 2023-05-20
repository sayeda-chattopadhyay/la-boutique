import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <div>
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div>
        <p>{data.price}</p>
        <p>{data.discountedPrice}</p>
      </div>
      <div>
        <p>{data.tags}</p>
      </div>
      <div>
        <p>{data.ratings}</p>
      </div>
    </div>
  );
};

export default Product;

// revirews need to be added to the product page
