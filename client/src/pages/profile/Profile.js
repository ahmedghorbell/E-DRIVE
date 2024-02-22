import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import AddProduct from "../addproduct/AddProduct";
import UpdateProfile from "../update/UpdateProfile";
import AdminSpace from "../../components/adminspace/AdminSpace";
import ContactUs from "../../components/contactus/ContactUs";
import ShoppingCart from "../../components/shoppingcart/ShoppingCart";
import MyPosts from "../../components/myposts/MyPosts";

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.listUsers);
  const isAdmin = useSelector((state) => state.AuthReducer.isAdmin);
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eef3f8",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper sx={{ padding: "40px", marginBottom: "40px", width: "100%" }}>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
            <Avatar
              alt={user?.name}
              src={
                user?.image ||
                "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685657580/blank-profile-picture-973460_1280_rlvlki.png"
              }
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                boxShadow: "0 0 15px #050505",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                margin: "15px 0",
                color: "#333333",
                fontFamily: "Papyrus",
                fontWeight: "bold",
              }}
            >
              {user && user.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <MenuList
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                paddingBottom: "10px",
                fontFamily: "Verdana",
                fontSize: "15px",
              }}
            >
              <MenuItem onClick={() => handleButtonClick("My Cart")}>
                My Cart
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick("My Posts")}>
                My Posts
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick("Update Profile")}>
                Update Profile
              </MenuItem>
              <MenuItem onClick={() => handleButtonClick("Create an ad")}>
                Create an ad
              </MenuItem>
              {isAdmin && (
                <MenuItem onClick={() => handleButtonClick("Admin Space")}>
                  Admin Space
                </MenuItem>
              )}
              <MenuItem onClick={() => handleButtonClick("Contact Us")}>
                Contact Us
              </MenuItem>
            </MenuList>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ paddingBottom: "15px", width: "100%" }}>
            <Typography
              sx={{ p: 3, fontFamily: "Verdana" }}
              variant="h5"
              gutterBottom
            >
              {activeButton || ("My Cart" && <ShoppingCart />)}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {activeButton === "My Posts" && <MyPosts />}
            {activeButton === "My Cart" && <ShoppingCart />}
            {activeButton === "Update Profile" && <UpdateProfile />}
            {activeButton === "Create an ad" && <AddProduct />}
            {activeButton === "Admin Space" && <AdminSpace />}
            {activeButton === "Contact Us" && <ContactUs />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
