import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover: "https://www.uengage.in/images/addo/logos/logo-5-1600769708.png",
  },
  {
    id: 2,
    time: "52 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqBAvq88T7NR4iMlsJmZxnTEekhz_a1tTjAFNgI4rS9sM5oneB9zpMPGSNwU4V-3j9Bk&usqp=CAU",
  },
  {
    id: 3,
    time: "48 min",
    cover:
      "https://play-lh.googleusercontent.com/12Tb7kiZc7RPvtH9s1qZd-kc-SgoecuukqUz23C3QToKWSMXZ3m0a79S6i6SmSgM0w",
  },
  {
    id: 4,
    time: "41 min",
    cover: "https://logowik.com/content/uploads/images/130_pizzahut.jpg",
  },
  {
    id: 5,
    time: "47 min",
    cover: "https://www.franchisetrade.in/wp-content/uploads/2018/11/1-7-1.jpg",
  },
  {
    id: 6,
    time: "37 min",
    cover:
      "https://i.pinimg.com/736x/42/18/4d/42184d9f614baae01264d89311e577e1--burger-design-logo-design-inspiration.jpg",
  },
  {
    id: 7,
    time: "47 min",
    cover:
      "https://play-lh.googleusercontent.com/XFoF95cacSb9XWggu2TasmSIfW-OODjkFgWUV_ib6ePh0F-RuK4m2i_2yEkCikmUOMbH",
  },
  {
    id: 8,
    time: "52 min",
    cover:
      "https://images.template.net/wp-content/uploads/2016/12/17062529/Creative-Pizza-Logo-Design.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prveArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top Brands For You</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.time}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
