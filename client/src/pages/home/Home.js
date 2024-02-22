import React, { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../js/actions/ProductAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "../../components/loading/Loading";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

const styles = {
  mainTitle: {
    marginTop: "16px",
    marginBottom: "16px",
    textAlign: "center",
    fontSize: "30px",
    color: "#333",
    fontFamily: "Verdana",
  },
  carouselItem: {
    width: "100%",
    display: "flex",
    color: "#fff",
    overflow: "hidden",
  },
  
  carouselImage: {
    width: "100%",
    maxHeight: "700px",
    objectFit: "cover",
    maxWidth: "100%",
  },
  
  carouselText: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "5px",
    borderRadius: "8px",
    fontSize: "1.5vw",
    fontFamily: "Verdana",
    textAlign: "center",
  },
  swiperSlide: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "250px", 
    height: "280px",
    overflow: "hidden",
  },
  image: {
    display: "block",
    width: "100%",
    height: "70%",
    textDecoration: "none",
    color: "inherit",
  },
  product: {
    color: "rgb(60,60,60)",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Verdana",
  }  
};

const Home = () => {
  const listProducts = useSelector(
    (state) => state.ProductReducer.listProducts
  );
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.ProductReducer.load);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const carouselItems = [
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685654256/06D7MKCapYRkTvbMcmLFi0J-10..v1659030778_dexsfn.jpg",
      text: "Things to know about electric vehicles",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685139307/R_xvhcoc.jpg",
      text:
        "1. Electric vehicles now include cars, transit buses, and trucks of all sizes.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685655247/1f3d362a2e9f4e24bb2683400ddc87f5_evfrgo.jpg",
      text: "2. Electric vehicles are saving the climate — and our lives.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685138701/Electric-Vehicles-1-1_ca15qx.jpg",
      text:
        "3. Electric vehicles have a smaller carbon footprint than gasoline-powered cars, no matter where your electricity comes from.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685383734/maxresdefault_aokb4v.jpg",
      text: "4. Through their entire lifetime, electric cars are better for the climate.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685655151/Gogoro_Swap_Girl_L_a0wtg8.jpg",
      text: "5. Electric vehicles can charge up at home, at work, while you’re at the store.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685654037/dreamstime_xxl_139966991-scaled_wdqhah.jpg",
      text:
        "6. Planning now by states and utilities to build infrastructure for charging electric vehicles will go a long way.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685655587/633adfb9889b3c2bdeb603d9_heliox-electric-bus-charging-infrastructure_oovfon.jpg",
      text:
        "7. Transit buses, that reliable fixture rumbling through our towns and cities, may just be the key to the electric vehicle revolution.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685383662/ET_Resized-scaled_lmqsrx.jpg",
      text:
        "8. Electric trucks — delivering goods from warehouses to homes — can make a big, clean difference. We need more of them.",
    },
    {
      image:
        "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685656066/ionity_mdpap4.jpg",
      text: "You can help make the future electric",
    },
  ];

  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

  return (
    <>
      <Box>
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.carouselImage}
              />
              <Typography style={styles.carouselText}>{item.text}</Typography>
            </div>
          ))}
        </Carousel>
        <Typography variant="h3" component="h1" style={styles.mainTitle}>
          LATEST VEHICLES
        </Typography>
        <Divider
          sx={{
            width: "300px",
            margin: "0 auto",
            alignSelf: "center",
            marginBottom: "20px",
          }}
        />
      </Box>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        className="mySwiper"
        style={{ width: "100%", paddingBottom: "40px" }}
      >
        {load ? (
          <Loading />
        ) : (
          <>
            {Array.isArray(listProducts) &&
              listProducts.slice(0, 15).map((product) => (
                <SwiperSlide style={styles.swiperSlide} key={product._id}>
                  {isAuth ? (
                    <Link to={`/get_product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={styles.image}
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={styles.image}
                      />
                    </Link>
                  )}
                  <p style={styles.product}>{product.name}</p>
                  <p style={styles.product}>from {product.price} $</p>
                </SwiperSlide>
              ))}
            <SwiperSlide style={styles.swiperSlide}>
              <Link to="/all_products">
                <img
                  style={styles.image}
                  src="https://res.cloudinary.com/dzw5kfcko/image/upload/v1685387857/plus-104_prb0io.png"
                  alt="show more"
                />
              </Link>
              <p style={styles.product}>Show More</p>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
};

export default Home;
