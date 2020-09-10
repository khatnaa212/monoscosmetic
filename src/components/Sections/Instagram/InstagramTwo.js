import Slider from "react-slick";

export default function InstagramTwo() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial",
    width: "70%",
    paddingLeft: "50px",
    height: '50%'
  };
  return (
    <div className="instagram-two">
      <Slider {...settings}>
        {Array.from(Array(10), (e, i) => {
          return (
            <a
              key={i}
              href="https://www.instagram.com/"
              className="slider-item"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/images/parthner/${i + 1}.png`
                }
                alt="Instagram image"
                style={mystyle}
              />
            </a>
          );
        })}
      </Slider>
    </div>
  );
}
