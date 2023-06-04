import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../js/actions/ProductAction";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Loading from "../../components/loading/Loading";

const styles = {
  cardMedia: {
    height: "auto",
    width: "100%",
    objectFit: "contain",
  },
  but: {
    margin: "10px",
    border: "1px solid rgb(173 255 47)",
    borderRadius: "8px",
    color: "rgb(173 255 47)",
    padding: "6px 12px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  },
};

const Details = () => {
  const { _id } = useParams();
  const listProducts = useSelector(
    (state) => state.ProductReducer.listProducts
  );
  const load = useSelector((state) => state.ProductReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(_id));
  }, [_id, dispatch]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <Box p={2}>
          <Button style={styles.but} onClick={() => window.history.back()}>
            Back
          </Button>
          <Card>
            <CardHeader
              title={listProducts.name}
              subheader={`FROM ${listProducts.price}$`}
              style={{ textTransform: "uppercase" }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img
                    src={listProducts.image}
                    alt={listProducts.name}
                    style={styles.cardMedia}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h3" gutterBottom>
                    Description :
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h6" gutterBottom>
                    Characteristics
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Number of seats: {listProducts.seats || "empty"}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Number of doors: {listProducts.doors || "empty"}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h6" gutterBottom>
                    Motorization
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Energy : {listProducts.energy || "empty"}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Power: {listProducts.power || "empty"}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h6" gutterBottom>
                    Transmission
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Top speed : {listProducts.topspeed || "empty"} km/h
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Number of reports: {listProducts.numberofreports || "empty"}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Battery life: {listProducts.batterylife || "empty"}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Details;
