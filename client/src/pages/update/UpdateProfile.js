import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, CssBaseline, FormControl, Grid, Input, InputLabel, Typography} from "@mui/material";
import Upload from "../../components/upload/Upload";
import { updateUser } from "../../js/actions/UsersActions";

const theme = createTheme();

const UpdateProfile = () => {
  const { _id } = useParams();
  const listUsers = useSelector((state) =>state.AuthReducer.listUsers );
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    image: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  useEffect(() => {
    if (listUsers) {
      setNewUser(listUsers);
    }
  }, [listUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUploadSuccess = (imageUrl) => {
    setNewUser((prevState) => ({ ...prevState, image: imageUrl }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(_id, newUser));
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <InputLabel htmlFor="image">Image</InputLabel>
            <Upload
              id="image"
              name="image"
              type="field"
              onChange={handleChange}
              autoComplete="image"
              onUploadSuccess={handleUploadSuccess}
            />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{paddingTop:"15px"}} htmlFor="name">Name</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    autoComplete="name"
                    value={newUser.name}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{paddingTop:"15px"}} htmlFor="phone">Phone</InputLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    autoComplete="phone"
                    value={newUser.phone}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel  htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    autoComplete="email"
                    value={newUser.email}
                  />
                </FormControl>
              </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
          <Grid container justifyContent="flex-end">
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default UpdateProfile