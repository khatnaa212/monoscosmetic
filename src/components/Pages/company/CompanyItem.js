import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import Button from "../../Control/Button";
import classNames from "classnames";

export default function ServiceItem(props) {
  const { bigImgSrc, smallImgSrc, description, order, reverse } = props;
  const bg1 = useRef(null);
  const bg2 = useRef(null);

  return (
    <div className={`services__item ${classNames({ "-reverse": reverse })}`}>
        {/* <style jsx>{`
        .container {
          width: 100%;
          height: 100vx;
        }
        .container :global(.btn) {
        }
      `}</style> */}

      <div className="container">
          
        <div className="row">
          {/* <div
            className={`col-6 col-md-2 ${classNames({
              "order-md-1": reverse,
            })}`}
          >
          </div> */}
          <div
            className={`col-6 col-md-6 ${classNames({
              "order-md-1": reverse,
            })}`}
          >
            <div className="services__item__content">
              <h2 className="services__item__title" >Компаний тухай</h2>
              <p className="services__item__description">
              
                Монголын гоо сайхны салбарын түүхэн хөгжлийн эзэн, үндэсний шилдэг үйлдвэрлэгч Монос Косметик ХХК нь Монгол орны эрс тэс уур амьсгалд тохирсон Монгол хүний гоо сайхныг төгс хамгаалах бүтээгдэхүүн үйлдвэрлэхээр зорин анхны гараагаа тавьсанаас хойш өөрийн орны гоо сайхны үйлдвэрлэлийн өнгө төрх, хөгжлийг тодорхойлсоор ирсэн билээ. 30 жилийн түүхтэй манай компани нь Монос группийн эм судлалын хүрээлэн, олон улсын гоо сайхны судалгаа, шинжилгээний лабораториудтай хамтран судалгаа хөгжил, шинэлэг технологи нэвтрүүлэхэд онцгой анхаарч ирсэн бөгөөд Монгол орны хөрсөнд ургасан, байгалийн цэвэр түүхий эдээр, олон төрлийн амин хүчил, эрдэс бодис, биологийн идэвхит нэгдлээр баялаг 90 нэр төрлийн гоо сайхны бүтээгдэхүүнийг 80 гаруй ажилтантай нэгдмэл багаараа үйлдвэрлэн хэрэглэгчиддээ хүргэн ажиллаж байна. 
                Монголчуудын гоо сайхны эртний уламжлал, байгаль цаг уурын онцлогт төгс тохирсон  Барагшунтай, Гүүний саамтай, Чацарганатай Биомон арьс арчилгааны иж бүрдэл нь 2005 онд Монгол улсын төрийн шагнал, Дэлхийн оюуны өмчийн байгууллагын алтан медаль хүртсэн, Монголын Худалдаа Аж Үйлдвэрийн Танхимаас “Органик бүтээгдэхүүн”-ий гэрчилгээг гардан авсан Монголын брэнд бүтээгдэхүүнүүд юм. Мөн 2017 онд зах зээлд шинээр нэвтэрсэн Гурамсан хандтай, Чихэр өвсний хандтай, Гангын хандтай гурван төрлийн Биомон шампунь, Хонины сүүлтэй тос, 2019 онд шинээр худалдаанд гарсан хүүхдийн арьс арчилгааны бүтээгдэхүүнүүд нь Монголын Худалдаа Аж Үйлдвэрийн Танхимаас “Органик бүтээгдэхүүн”-ий гэрчилгээгээ гардан авсан. 
                2018 онд Монос Косметик ХХК 100% органик орц найрлагатай, байгальд ээлтэй, дахин боловсруулсан савлагаатай, органик гоо сайхны “МОЙЛ” брэндийг зах зээлд нэвтрүүлсэн.  Мойл брэнд нь өнөөдөр 8 нэрийн 66 төрлийн органик арьс арчилгааны бүтээгдэхүүн үйлдвэрлэн хэрэглэгчиддээ хүргээд байна. Мойл органик брэндийн бүх бүтээгдэхүүн МХАҮТ-аас Органик бүтээгдэхүүний гэрчилгээгээр баталгаажсан. 
                
              </p>
            </div>
          </div>
          <div
            className={`col-6 col-md-6 ${classNames({
              "order-md-1": reverse,
            })}`} 
            style={{marginTop:"80px"}}
          >
            <div className="services__item__content">
              <p className="services__item__description">
              
              2016-2018 онд манай компани БНСУ-ын Даэгү Хааны их сургуулийн дэргэдэх гоо сайхны судалгаа, хөгжлийн лабораторитой хамтран шинэ бүтээгдэхүүний технологийн судалгаа шинжилгээний ажлыг хамтран хийж 2019 онд 13 нэр төрлийн шинэ бүтээгдэхүүнийг зах зээлд амжилттай нэвтрүүлээд байна. 
                Монос Косметик ХХК 2018 онд монголын гоо сайхны үйлдвэрлэлийн салбарт шинэчлэл хийж, салбартаа анхдагч олон улсын ISO 9001:2015 чанарын менежментийн тогтолцоог үйл ажиллагаандаа амжилттай нэвтрүүлж дэлхийн топ-5 баталгаажуулалтын байгууллага болох AFNOR группээс гэрчилгээ гардан авсан. 2020 онд Монос Косметик ХХК нь GMP стандарт бүхий гоо сайхны жишиг үйлдвэрийг ашиглалтанд оруулахыг зорин ажиллаж байна. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
