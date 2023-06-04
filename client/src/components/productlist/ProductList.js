import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../js/actions/ProductAction";
import ProductCards from "../productcard/ProductCard";
import Loading from "../loading/Loading";
import { Button } from "@mui/material";

const styles = {
but: {
    margin:"10px",
    border: '1px solid rgb(173 255 47)',
    borderRadius: '8px',
    color: 'rgb(173 255 47)',
    padding: '6px 12px',
    fontSize: '16px',
    fontWeight:'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  }
}


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
    <div>
      <Button style={styles.but} onClick={() => window.history.back()}>Back</Button>{" "}
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
