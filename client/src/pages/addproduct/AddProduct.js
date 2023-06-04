import React, { useState } from "react";
import { Button, FormLabel, TextField, FormControl, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../js/actions/ProductAction";
import { Link } from "react-router-dom";
import Upload from "../../components/upload/Upload";

const styles = {
  form: {
    color: "grey",
    marginTop: "15px",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Verdana",
  },
  update: {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: "40%",
  },
};

const AddProduct = () => {
  const user = useSelector((state) => state.AuthReducer.listUsers);

  const [newProduct, setNewProduct] = useState({
    username: user.name,
    createdBy: user._id,
    category: "",
    image:
      "https://res.cloudinary.com/dzw5kfcko/image/upload/v1683290704/qzcwilm5yl9whglc6d63.png",
    name: "",
    energy: "",
    price: null,
  });

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const add = () => {
    setProducts([...products, newProduct]);
    dispatch(addProduct(newProduct));
    setNewProduct({
      username: user.name,
      createdBy: user._id,
      category: "",
      image: "",
      name: "",
      energy: "",
      price: null,
    });
  };
  const handleUploadSuccess = (imageUrl) => {
    setNewProduct({
      ...newProduct,
      image: imageUrl,
    });
  };
  const { category, image, name, energy, price } = newProduct;

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <FormControl style={{ ...styles.update, margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Verdana",
            textTransform: "uppercase",
          }}
        >
          Add New Vehicles
        </h2>
        <FormLabel htmlFor="category" style={styles.form}>
          Category
        </FormLabel>
        <TextField
          id="category"
          name="category"
          value={category}
          onChange={handleChange}
          label="Add category"
          style={{ marginBottom: "20px" }}
          select
        >
          <MenuItem value="trucks">Trucks</MenuItem>
          <MenuItem value="cars">Cars</MenuItem>
          <MenuItem value="motorcycles">Motorcycles</MenuItem>
          <MenuItem value="scooters">Scooters</MenuItem>
          <MenuItem value="bicycles">Bicycles</MenuItem>
        </TextField>
        <FormLabel htmlFor="image" style={styles.form}>
          Image
        </FormLabel>
        <Upload
          value={image}
          onChange={handleChange}
          onUploadSuccess={handleUploadSuccess}
        />
        <FormLabel htmlFor="name" style={styles.form}>
          Name
        </FormLabel>
        <TextField
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          label="Add name"
          style={{ marginBottom: "20px" }}
        />
        <FormLabel htmlFor="energy" style={styles.form}>
          Energy
        </FormLabel>
        <TextField
          id="energy"
          name="energy"
          value={energy}
          onChange={handleChange}
          label="Add energy"
          select
        >
          <MenuItem value="ELECTRIC">ELECTRIC</MenuItem>
          <MenuItem value="HYBRID">HYBRID </MenuItem>
        </TextField>
        <FormLabel
          htmlFor="price"
          style={{
            color: "grey",
            marginBottom: "20px",
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Price
        </FormLabel>
        <TextField
          id="price"
          name="price"
          value={price}
          onChange={handleChange}
          label="Add price"
          type="number"
        />

        <Button
          component={Link}
          to="/new_product"
          onClick={add}
          variant="contained"
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AddProduct;
