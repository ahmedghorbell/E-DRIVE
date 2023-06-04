import React, { useState, useEffect } from "react";
import {
  Button,
  FormLabel,
  TextField,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../js/actions/ProductAction";
import Upload from "../../components/upload/Upload";
import { useNavigate, useParams } from "react-router-dom";

const styles = {
  update: {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: "40%",
  },
  form: {
    color: "grey",
    marginTop: "15px",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Verdana",
  },
};

const UpdateProduct = () => {
  const { _id } = useParams();
  const listProducts = useSelector((state) =>
    state.ProductReducer.listProducts.find((product) => product._id === _id)
  );
  const user = useSelector((state) => state.AuthReducer.listUsers);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    username: user.name,
    createdBy: user._id,
    category: "",
    image: "",
    name: "",
    energy: "",
    price: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (listProducts) {
      setNewProduct(listProducts);
    }
  }, [listProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUploadSuccess = (imageUrl) => {
    setNewProduct((prevState) => ({ ...prevState, image: imageUrl }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(listProducts._id, newProduct));
    navigate("/new_product");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "130px" }}
    >
      <FormControl style={styles.update}>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Verdana",
            textTransform:"uppercase"
          }}
        >
          Update Product
        </h2>
        <FormLabel style={styles.form} htmlFor="category">
          Category
        </FormLabel>
        <TextField
          id="category"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          label="Add category"
          select
        >
          <MenuItem value="trucks">Trucks</MenuItem>
          <MenuItem value="cars">Cars</MenuItem>
          <MenuItem value="motorcycles">Motorcycles</MenuItem>
          <MenuItem value="scooters">Scooters</MenuItem>
          <MenuItem value="bicycles">Bicycles</MenuItem>
        </TextField>
        <FormLabel style={styles.form} htmlFor="image">
          Image
        </FormLabel>
        <Upload
          value={newProduct.image}
          onUploadSuccess={handleUploadSuccess}
        />
        <FormLabel style={styles.form} htmlFor="name">
          Name
        </FormLabel>
        <TextField
          id="name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          label="Add name"
        />
        <FormLabel style={styles.form} htmlFor="energy">
          Energy
        </FormLabel>
        <TextField
          id="energy"
          name="energy"
          value={newProduct.energy}
          onChange={handleChange}
          label="Add energy"
          select
        >
          <MenuItem value="ELECTRIC">ELECTRIC</MenuItem>
          <MenuItem value="HYBRID">HYBRID </MenuItem>
        </TextField>
        <FormLabel style={styles.form} htmlFor="price">
          Price
        </FormLabel>
        <TextField
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          label="Add price"
          type="number"
        />
        <FormLabel style={styles.form} htmlFor="seats">
          Seats
        </FormLabel>
        <TextField
          id="seats"
          name="seats"
          value={newProduct.seats}
          onChange={handleChange}
          label="Add seats"
        />
        <FormLabel style={styles.form} htmlFor="doors">
          Doors
        </FormLabel>
        <TextField
          id="doors"
          name="doors"
          value={newProduct.doors}
          onChange={handleChange}
          label="Add doors"
        />
        <FormLabel style={styles.form} htmlFor="power">
          Power
        </FormLabel>
        <TextField
          id="power"
          name="power"
          value={newProduct.power}
          onChange={handleChange}
          label="Add power"
        />
        <FormLabel style={styles.form} htmlFor="batterylife">
          batterylife
        </FormLabel>
        <TextField
          id="batterylife"
          name="batterylife"
          value={newProduct.batterylife}
          onChange={handleChange}
          label="Add batterylife"
        />
        <FormLabel style={styles.form} htmlFor="topspeed">
          Top speed
        </FormLabel>
        <TextField
          id="topspeed"
          name="topspeed"
          value={newProduct.topspeed}
          onChange={handleChange}
          label="Add topspeed"
        />
        <FormLabel style={styles.form} htmlFor="numberofreports">
          Number of Reports
        </FormLabel>
        <TextField
          id="numberofreports"
          name="numberofreports"
          value={newProduct.numberofreports}
          onChange={handleChange}
          label="Add numberofreports"
        />
        <Button
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
          variant="contained"
        >
          Update
        </Button>
      </FormControl>
    </div>
  );
};

export default UpdateProduct;
