import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../js/actions/ProductAction";
import Loading from "../loading/Loading";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  tableCell: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    fontFamily: "Verdana",
  },
};

const MyPosts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.listProducts);
  const user = useSelector((state) => state.AuthReducer.listUsers);
  const load = useSelector((state) => state.ProductReducer.load);
  const createdBy = user._id;
  const isMobile = useMediaQuery("(max-width: 600px)"); // Check if screen size is mobile

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const remove = async (productId) => {
    await dispatch(deleteProduct(productId));
    window.location.reload();
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          {products.filter((product) => product.createdBy === createdBy)
            .length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Image</TableCell>
                    {!isMobile && <TableCell style={styles.tableCell}>Category</TableCell>}
                    {!isMobile && <TableCell style={styles.tableCell}>Name</TableCell>}
                    {!isMobile && <TableCell style={styles.tableCell}>Energy</TableCell>}
                    {!isMobile && <TableCell style={styles.tableCell}>Price</TableCell>}
                    <TableCell style={styles.tableCell}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products
                    .filter((product) => product.createdBy === createdBy)
                    .map((product) => (
                      <TableRow key={product._id}>
                        <TableCell>
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "150px", height: "100px" }}
                          />
                        </TableCell>
                        {!isMobile && <TableCell sx={styles.text}>{product.category}</TableCell>}
                        {!isMobile && <TableCell sx={styles.text}>{product.name}</TableCell>}
                        {!isMobile && <TableCell sx={styles.text}>{product.energy}</TableCell>}
                        {!isMobile && <TableCell>{product.price}$</TableCell>}
                        <TableCell>
                          <div style={styles.buttonContainer}>
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
                              color="error"
                              onClick={() => remove(product._id)}
                              style={{ marginLeft: "8px" }}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <>
              <Typography variant="h6" align="center">
                You don't have any products to be displayed.
              </Typography>
            </>
          )}
        </>
      )}
    </>
  );
};

export default MyPosts;
