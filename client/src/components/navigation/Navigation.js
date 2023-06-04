import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../js/actions/AuthActions";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  TextField,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { getProducts } from "../../js/actions/ProductAction";

const styles = {
  root: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#FFFFFF",
  },
  navbar: {
    backgroundColor: "#192734",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#FFFFFF",
  },
  logo: {
    width: 220,
    height: 50,
    margin: "15px",
  },
  navlink: {
    color: "#FFFFFF",
    display: "flex",
    marginRight: "15px",
    alignItems: "center",
    height: "100%",
    fontFamily: "Verdana",
  },
  search: {
    backgroundColor: "#ebffff",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    width: "190px",
    fontFamily: "Verdana",
  },
  searchResults: {
    textTransform: "uppercase",
    color: "black",
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 10000,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "5px",
    width: "100%",
    marginTop: "4px",
    maxHeight: "300px",
    overflowY: "auto",
    textAligne: "center",
  },
  drawerContainer: {
    width: 200,
  },
  userimg: {
    height: "50px",
    width: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "100px",
  },
};

const Navigation = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const user = useSelector((state) => state.AuthReducer.listUsers);
  const listProducts = useSelector(
    (state) => state.ProductReducer.listProducts
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setShowResults(true);
  };
  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
    setShowResults(true);
    filterResults(e.target.value);
  };

  const filterResults = (inputValue) => {
    let filteredResults = [];
    if (Array.isArray(listProducts)) {
      filteredResults = listProducts.filter(
        (el) =>
          inputValue.trim() === "" ||
          el.name.toUpperCase().includes(inputValue.toUpperCase())
      );
    }
    setSearchResults(filteredResults);
  };

  const handleOutsideClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowResults(false);
    }
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const logOutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProducts());

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch]);

  return (
    <div style={styles.root}>
      <AppBar position="fixed" style={styles.navbar}>
        <Toolbar>
          <Typography component={Link} to="/" variant="h1" style={styles.title}>
            <img
              src="https://res.cloudinary.com/dzw5kfcko/image/upload/v1685816397/logo-no-background_yyqe1l.png"
              alt="E-DRIVE"
              style={styles.logo}
            />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                style={styles.drawer}
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
              >
                <div style={styles.drawerContainer}>
                  <List style={{ width: "200px" }}>
                    <ListItem button component={Link} to="/new_product">
                      <ListItemText primary="New Vehicles" />
                    </ListItem>
                    <div style={styles.search} ref={searchRef}>
                      <TextField
                        variant="outlined"
                        placeholder="E-DRIVE"
                        InputProps={{
                          startAdornment: (
                            <SearchIcon onClick={handleSearchClick} />
                          ),
                        }}
                        value={inputSearch}
                        onChange={handleInputChange}
                      />
                      {showResults && (
                        <div style={styles.searchResults}>
                          {searchResults.map((result) => (
                            <div key={result._id}>
                              <List>
                                <ListItem
                                  button
                                  component={Link}
                                  to={`/get_product/${result._id}`}
                                >
                                  <ListItemText primary={result.name} />
                                </ListItem>
                              </List>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {isAuth ? (
                      <>
                        <ListItem
                          button
                          component={Link}
                          to={`/my_space/${user._id}`}
                        >
                          <ListItemText primary="My Space" />
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.image}
                              style={styles.userimg}
                            />
                          ) : (
                            <PersonIcon />
                          )}
                        </ListItem>
                        <ListItem button component={Link} onClick={logOutUser}>
                          <ListItemText primary="Log Out" />
                        </ListItem>
                      </>
                    ) : (
                      <>
                        <ListItem button component={Link} to="/login">
                          <ListItemText primary="Log In" />
                        </ListItem>
                      </>
                    )}
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                style={styles.navlink}
                component={Link}
                to="/new_product"
              >
                New Vehicles
              </Button>
              <div style={styles.search} ref={searchRef}>
                <TextField
                  variant="outlined"
                  placeholder="E-DRIVE"
                  InputProps={{
                    startAdornment: <SearchIcon onClick={handleSearchClick} />,
                  }}
                  value={inputSearch}
                  onChange={handleInputChange}
                />
                {showResults && (
                  <div style={styles.searchResults}>
                    {searchResults.map((result) => (
                      <div key={result._id}>
                        <List>
                          <ListItem
                            button
                            component={Link}
                            to={`/get_product/${result._id}`}
                          >
                            <ListItemText primary={result.name} />
                          </ListItem>
                        </List>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {isAuth ? (
                <>
                  <Button
                    color="inherit"
                    style={styles.navlink}
                    component={Link}
                    to={`/my_space/${user._id}`}
                  >
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.image}
                        style={styles.userimg}
                      />
                    ) : (
                      <PersonIcon />
                    )}
                    My Space
                  </Button>

                  <Button style={styles.navlink} onClick={logOutUser}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button style={styles.navlink} component={Link} to="/login">
                    Log In
                  </Button>
                </>
              )}
            </>
          )}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              style={styles.closeDrawerBtn}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
