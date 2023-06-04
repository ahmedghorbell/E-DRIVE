import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../js/actions/ProductAction";

const styles = {
  root: {
    flexGrow: 1,
    padding: "16px",
  },
  groupe: {
    marginTop: "50px",
  },
  card: {
    width: "350px",
    textAlign: "center",
  },
  image: {
    width: "185px",
    height: "185px",
  },
  but: {
    backgroundColor: "rgb(173, 255, 47)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    fontFamily: "Verdana",
  },
};

function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleCategoryClick = (category) => {
    dispatch(getProductByCategory(category));
    navigate(`/get_products/${category}`);
  };

  const products = [
    {
      name: "trucks",
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685385295/pickup_289821_95624_xpmloa.png",
    },
    {
      name: "cars",
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685386292/icon-car-images-21_aqbbzm.png",
    },
    {
      name: "motorcycles",
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685385729/hd-sports-bike-motorcycle-black-silhouette-icon-transparent-png-11640439927rzjicdhpuy_kyavqu.png",
    },
    {
      name: "scooters",
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685385846/scooter-motorcycle-icon-design-illustration-logo-template-free-vector_gk8gt3.jpg",
    },
    {
      name: "bicycles",
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685385908/il_570xN.4180092577_1s4e_zthg7y.png",
    },
  ];

  return (
    <div style={styles.root}>
      {isAuth ? (
        <Button
          style={styles.but}
          type="submit"
          component={Link}
          to="/add_product"
        >
          Add New Vehicles
        </Button>
      ) : null}

      <div style={styles.groupe}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Card style={styles.card}>
              <CardActionArea component={Link} to="/all_products">
                <img
                  style={styles.image}
                  src="https://res.cloudinary.com/dzw5kfcko/image/upload/v1685386138/depositphotos_22896312-stock-illustration-icons-set-cars_qynwc4.jpg"
                  alt="all product"
                />
                <CardContent>
                  <Typography
                    sx={{ fontFamily: "Verdana" }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    ALL PRODUCTS
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {products.map((product, index) => (
            <Grid item key={index}>
              <Card style={styles.card}>
                <CardActionArea
                  onClick={() => handleCategoryClick(`${product.name}`)}
                >
                  <CardContent>
                    <img
                      style={styles.image}
                      src={product.image}
                      alt={product.name}
                    />
                    <Typography
                      sx={{ fontFamily: "Verdana" }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {product.name.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default NewProduct;
