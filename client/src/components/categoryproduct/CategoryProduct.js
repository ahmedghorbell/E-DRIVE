import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../js/actions/ProductAction";
import ProductCards from "../productcard/ProductCard";
import Loading from "../loading/Loading";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

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

const CategoryProduct = () => {
  const { category } = useParams();

  const listProducts = useSelector(
    (state) => state.ProductReducer.listProducts
  );
  const load = useSelector((state) => state.ProductReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByCategory(category));
  }, [category, dispatch]);

  return (
    <div>
      <Button style={styles.but} onClick={() => window.history.back()}>Back</Button>
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
        ) : listProducts.length ? (
          listProducts.map((el) => (
            <ProductCards product={el} key={`el-${el._id}`} />
          ))
        ) : (
          <h2> No products to display .. </h2>
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
