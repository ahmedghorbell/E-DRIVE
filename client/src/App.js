import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Footer from "./components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./js/actions/AuthActions";
import { useEffect } from "react";
import ErrorPage from "./pages/error/ErrorPage";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import AddProduct from "./pages/addproduct/AddProduct";
import ProductList from "./components/productlist/ProductList";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsAndConditions from "./components/footer/TermsAndConditions";
import NewProduct from "./pages/newproduct/NewProducts";
import UpdateProduct from "./pages/update/UpdateProduct";
import Details from "./pages/details/Details";
import CategoryProduct from "./components/categoryproduct/CategoryProduct";

function App() {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token", {})) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/new_product" element={<NewProduct />} />
          <Route path="/all_products" element={<ProductList />} />
          <Route path="/get_products/:category" element={<CategoryProduct />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          {isAuth ? (
            <>
              <Route path="/my_space/:_id" element={<Profile />} />
              <Route path="/add_product" element={<AddProduct />} />
              <Route path="update_product/:_id" element={<UpdateProduct />} />
              <Route path="get_product/:_id" element={<Details />} />
            </>
          ) : null}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      

      <Footer />
      </div>
    </div>
  );
}

export default App;
