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
    <Box sx={{ backgroundColor: "#eef3f8", padding: "40px" }}>
      <Paper sx={{ padding: "40px", marginBottom: "40px" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar
              alt={user?.name}
              src={
                user?.image ||
                "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685657580/blank-profile-picture-973460_1280_rlvlki.png"
              }
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                boxShadow: "0 0 15px #050505",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item sx={{textAlign:"center"}}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: "#333333",
                fontFamily: "Papyrus",
                fontWeight: "bold",
              }}
            >
              {user && user.name}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333333",
                fontFamily: "Verdana",
                fontSize: "20px",
              }}
            >
              {" "}
              {/* Custom text color */}
              {user && user.email}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333333",
                fontFamily: "Verdana",
                fontSize: "20px",
              }}
            >
              {" "}
              {/* Custom text color */}
              {user && user.phone}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography
              sx={{ fontFamily: "Verdana", fontSize: "30px" }}
              gutterBottom
            >
              My space
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <MenuList>
              <MenuItem
                sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                onClick={() => handleButtonClick("My Cart")}
              >
                My Cart
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                onClick={() => handleButtonClick("My Posts")}
              >
                My Posts
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                onClick={() => handleButtonClick("Update Profile")}
              >
                Update Profile
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                onClick={() => handleButtonClick("Create an ad")}
              >
                Create an ad
              </MenuItem>
              {isAdmin && (
                <MenuItem
                  sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                  onClick={() => {
                    handleButtonClick("Admin Space");
                  }}
                >
                  Admin Space
                </MenuItem>
              )}
              <MenuItem
                sx={{ fontFamily: "Verdana", fontSize: "15px" }}
                onClick={() => handleButtonClick("Contact Us")}
              >
                Contact Us
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item md={8}>
          <Paper sx={{paddingBottom:"15px"}}>
            <Typography sx={{ p: 3, fontFamily: "Verdana"}} variant="h5" gutterBottom>
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
