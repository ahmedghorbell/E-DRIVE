import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, TextField, Button,} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);
  const user = useSelector((state) => state.AuthReducer.listUsers);

  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Grid item>
            <Typography sx={{  fontFamily: "Verdana"}} variant="h5" component="h5" gutterBottom>
              Card details
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt={user?.name}
              src={
                user?.image ||
                "https://res.cloudinary.com/dzw5kfcko/image/upload/v1683728988/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix_u2lfe9.png"
              }
              style={{ width: 45 }}
            />
          </Grid>
        </Grid>
   

        <form>
          <TextField
            fullWidth
            variant="outlined"
            size="large"
            label="Cardholder's Name"
            placeholder="Cardholder's Name"
            mb={4}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="large"
            label="Card Number"
            placeholder="1234 5678 9012 3457"
            inputProps={{ minLength: 19, maxLength: 19 }}
            mb={4}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                size="large"
                label="Expiration"
                placeholder="MM/YYYY"
                inputProps={{ minLength: 7, maxLength: 7 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                size="large"
                label="CVV"
                placeholder="&#9679;&#9679;&#9679;"
                inputProps={{ minLength: 3, maxLength: 3 }}
              />
            </Grid>
          </Grid>
        </form>

        <hr style={{ margin: "1.5rem 0" }} />

        <Button variant="contained" color="primary" fullWidth size="large">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1">{totalPrice} $</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Checkout{" "}
                <KeyboardDoubleArrowRightIcon
                  style={{ marginLeft: "0.5rem" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
