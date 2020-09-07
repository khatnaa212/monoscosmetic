import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import Button from "../../Control/Button";
import classNames from "classnames";

export default function ServiceItem(props) {
  const { bigImgSrc, smallImgSrc, description, order, reverse } = props;
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  useEffect(() => {
    let parallax1 = new Parallax(bg1.current);
    let parallax2 = new Parallax(bg2.current);
    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);
  const renderListStyle = (content) => {
    if (reverse) {
      return (
        <>
          {content}{" "}
          <i className="fas fa-check" style={{ marginLeft: 5 / 15 + "em" }} />
        </>
      );
    }
    return (
      <>
        <i className="fas fa-check" style={{ marginRight: 5 / 15 + "em" }} />{" "}
        {content}
      </>
    );
  };
  return (
    <div className={`services__item ${classNames({ "-reverse": reverse })}`}>
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-md-12 ${classNames({
              "order-md-2": reverse,
            })}`}
          >
            <div className="services__item__image">
              <div className="services__item__image__background">
                <img
                  src="/assets/images/introduction/IntroductionThree/bg.png"
                  alt="background"
                />
              </div>

              <div className="services__item__image__detail">
                <div className="image__item">
                  <div ref={bg1} className="wrapper">
                    <img data-depth="0.3" src={bigImgSrc} alt="image" />
                  </div>
                </div>
                <div className="image__item">
                  <div ref={bg2} className="wrapper">
                    {/* <img
                      data-depth="0.2"
                      data-invert-x
                      data-invert-y
                      src={smallImgSrc}
                      alt="image"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
                   <div
            className={`col-12 col-md-12 ${classNames({
              "order-md-1": reverse,
            })}`}
          >
            <div className="services__item__content">
             
              <p className="services__item__description">
              Монос Косметик ХХК байгуулагдаж, Монгол улсад гоо сайхны салбар үүсч хөгжсөний 30 жилийн ойн баярын мэндийг Монос нэрээр овоглож Монос Косметикийн тулгын чулууг тавилцаж, хөгжлийн түүхийг хамтдаа бүтээлцсэн ахмад буурлууд, үе үеийн удирдлага, хамт олон, одоо ажиллаж шинэ түүхийг бүтээж буй нийт ажилтнууд болон биднийг хөгжин дэвших, урагшлан ахихад үргэлж дэмжин, бидэнд итгэн, үндэсний үйлдвэрлэлээ сонгон хэрэглэж ирсэн эрхэм хэрэглэгч, харилцагчиддаа өргөн дэвшүүлье.

Монос Косметик ХХК-ийн 30 жилийн түүх бол Монгол улсад гоо сайхны цоо шинэ салбарыг хөгжүүлж, шинэ технологийг улсдаа нэвтрүүлж, Монгол орны байгалийн шим, Монгол хүний ур ухаан, Монгол оюун сэтгэлгээг дэлхийд таниулсан, амжилт ололт, арвин туршлагаар дүүрэн үйлдвэрлэлийн салбарын нэгэн түүх юм.

1990 онд анхны бүтээгдэхүүнээ  үйлдвэрлэж эхлэснээс хойш бид  өнөөдөр үйлдвэрлэлийн шугамаар 90 нэр төрлийн, органик үйлдвэрлэлийн 40-өөд нэр төрлийн, нийт 130 гаруй нэр төрлийн арьс арчилгаа, үс арчилгаа, бие арчилгаа, хүүхдийн арьс арчилгаа, гар арчилгааны бүтээгдэхүүнийг хэрэглэгчдийнхээ хэрэгцээнд зориулан үйлдвэрлэж байна.

Монос Косметик ХХК-ийн хамт олон та бүхний эрүүл мэнд, гоо сайхны төлөө авъяас чадвар, сэтгэл зүрх, мэдлэг боловсролоо зориулан улам шаргуу ажиллах болно. 30 жилийн турш хамтдаа байгаа хэрэглэгчид та бүхэндээ чин сэтгэлийн талархал илэрхийлье.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
