import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../js/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalPrice } from "../../js/reducers/CartReducer";
import { css } from '@emotion/css';

const styles = {
  card: css({
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
      border: "1px solid #aaa",
      cursor: "pointer",
      transform: "translateY(-2px)",
      transition: "transform 0.2s ease",
    },
  }),
  media: {
    width: "280px",
    height: "180px",
    objectFit: "cover",
  },
  title: {
    marginBottom: "4px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTop: "2px solid #ccc",
  },
};

function ProductCard({ product }) {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isAdmin = useSelector((state) => state.AuthReducer.isAdmin);
  const dispatch = useDispatch();
  
  const remove = async () => {
    await dispatch(deleteProduct(product._id));
    window.location.reload();
  };

  const handleAddToCart = () => {
    dispatch(updateTotalPrice(product.price));
  };

  return (
    <Card className={styles.card}>
      {isAdmin ? (
        <Typography variant="p" color="textSecondary">
          Created By: {product.username.toUpperCase()}
        </Typography>
      ) : null}
      <CardMedia style={styles.media} image={product.image} title={product.name.toUpperCase()} />
      <CardContent>
        <Typography style={styles.title} variant="h5">
          {product.category}
        </Typography>
        <Typography style={styles.title} variant="h6">
          {product.name}
        </Typography>
        <Typography style={styles.title} variant="h6" color="textSecondary" component="h6">
          {product.energy}
        </Typography>
        <Typography style={styles.title} variant="h6" component="h6">
          FROM {product.price} $
        </Typography>
      </CardContent>
      {isAuth ? (
        <>
          <CardActions style={styles.actions}>
            <Button
            style={{marginRight:"10px"}}
              variant="outlined"
              color="warning"
              startIcon={<CreditCardIcon />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              component={Link}
              to={`/get_product/${product._id}`}
              variant="outlined"
              color="primary"
            >
              Details
            </Button>
          </CardActions>

          <div>
            {isAdmin ? (
              <>
                <Button
                  component={Link}
                  to={`/update_product/${product._id}`}
                  variant="outlined"
                  color="primary"
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  onClick={remove}
                  style={{ marginLeft: "8px",}}
                  color="error"
                >
                  Delete
                </Button>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <Typography variant="p">
          To view more detail, you must log in.
          </Typography>
          <Button variant="outlined" component={Link} to="/login" color="success">
              Log In
          </Button>
        </>
      )}
    </Card>
  );
}

export default ProductCard;
