import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../js/actions/ProductAction";
import ProductCards from "../productcard/ProductCard";
import Loading from "../loading/Loading";


const ProductList = () => {
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const listProducts = useSelector(
    (state) => state.ProductReducer.listProducts
  );
  const load = useSelector((state) => state.ProductReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (listProducts.length > 0) {
      const randomList = listProducts.sort(() => Math.random() - 0.5);
      setRandomizedProducts(randomList);
    }
  }, [listProducts]);

  return (
    <div style={{marginTop:100}}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {load ? (
          <Loading />
        ) : randomizedProducts.length > 0 ? (
          randomizedProducts.map((el) => (
            <ProductCards product={el} key={el._id} />
          ))
        ) : (
          <h2> No products to display .. </h2>
        )}
      </div>
    </div>
  );
};

export default ProductList;
