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
              Монос Косметик ХХК байгуулагдаж, Монгол улсад гоо сайхны салбар үүсч хөгжсөний 30 жилийн ойн баярын мэндийг үндэсний үйлдвэрлэлээ сонгон хэрэглэж ирсэн эрхэм хэрэглэгч, харилцагчиддаа өргөн дэвшүүлье.
              </p>
            </div>
            <div className="services__item__content">
              <p className="services__item__description">
              1990 онд анхны бүтээгдэхүүнээ үйлдвэрлэж эхлэсэнээс хойш өнөөдөр үндсэн үйлдвэрлэл болон органик үйлдвэрлэлийн нийт 140 гаруй нэр төрлийн арьс болон үс арчилгаа, бие арчилгаа, хүүхдийн арьс арчилгаа, гар арчилгааны бүтээгдэхүүнийг хэрэглэгчдийнхээ хэрэгцээнд зориулан үйлдвэрлэж байна.
              </p>
            </div>
            <div className="services__item__content">
              <p className="services__item__description">
              Манай хамт олон өөрийн орны хуурай, эрс тэс уур амьсгалд тохирсон бүтээгдэхүүн үйлдвэрлэх зорилго тавин судалгаа шинжилгээний хүчирхэг баг бүрдүүлэн ажилласаны үр дүнд байгалийн гаралтай түүхий эд ашиглаж, төрөл бүрийн витамин, амин хүчил, уураг зэрэг биологийн идэвхт бодисоор баялаг гоо сайхны органик бүтээгдэхүүн үйлдвэрлэдэгээрээ онцлогтой. 30 жилийн хугацаанд Монос Косметик ХХК нь олон олон амжилт бүтээлийн эзэн болж, дотоодын гоо сайхны үйлдвэрлэлийн зах зээлд эзлэх хувь жилээс жилд өссөөр байна. Бидний бахархал болсон Биомон шампунь, Биомон арьс арчилгааны иж бүрдэл, Биомон хонины сүүлтэй тос зэрэг брэнд бүтээгдэхүүнийг нэрлэж болно. 2017 оноос Биомон гурамсан хандтай шампунь, Биомон кидс-хонины сүүлтэй тос, Биомон барагшуун иж бүрдэл, Биомон гүүний саам иж бүрдэл, Биомон чацаргана иж бүрдэлийг Хятад, Япон улс руу экспортоор гаргаж эхлэсэн амжилттай ажиллаж байна.
              </p>
            </div>
            <div className="services__item__content">
              <p className="services__item__description">
              Бид салбарынхаа хөгжлийг тодорхойлж ISO болон GMP стандарт бүхий жишиг үйлдвэрийг бий болгох, дэлхийд танигдсан монгол брэндийг бүтээх гэсэн хүсэл эрмэлзлээр шаргуу ажиллаж байна.
              </p>
            </div>
            <div className="services__item__content">
              <p className="services__item_description">
              30 жилийн турш хамтдаа байгаа хэрэглэгчид та бүхэндээ чин сэтгэлийн талархал илэрхийлье.
              </p>
            </div>
            <div className="services__item__content"> 
              <p className="services__item_description">
              Хүндэтгэсэн
              </p>
            </div>
            <div className="services__item__content" style={{marginLeft:"75px"}}>
              <p className="services__item_description" >
              Монос Kосметик ХХК-н Гүйцэтгэх захирал Э.Дагвабаасансүрэн​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
