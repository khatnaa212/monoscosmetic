import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import ServiceItem from "../../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../../common/utils";
import servicesData from "../../data/pages/services.json";
import TestimonialThree from "../../components/Sections/Testimonial/TestimonialThree";
import testimonialData from "../../data/testimonial/testimonialThree.json";
import IntroductionSix from "../../components/Sections/Introduction/IntroductionSix";
import introductionSixData from "../../data/introduction/introductionSix.json";





export default function services() {
  return (
    <LayoutFour title="Компаны тухай">
      <Breadcrumb title="Компаны тухай">
        <BreadcrumbItem name="Нүүр" />
        <BreadcrumbItem name="Компаны тухай" current />
      </Breadcrumb>
    <div className="row" style={{maxWidth:"1600px", margin:"0 auto", padding:"0px 25px", position:"relative"}}> 

      <div className="row">
            <div className="col-4 col-md-4">
               <h1 style={{paddingLeft: "100px", borderBottom:"3px solid pink"}}>Мэндчилгээ<span style={{color:"pink"}}>.</span></h1>
             
            </div>
        <div className="col-8 col-md-8" style={{left:"-130px"}}>
            {servicesData &&
              servicesData.map((item, index) => (
            <ServiceItem
              key={index}
              bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            />
          ))}
        </div>
      </div>

      <div className="row">
          <div className="col-4 col-md-4">
           <h1 style={{paddingLeft: "100px", borderBottom:"3px solid pink"}}>Танилцуулга<span style={{color:"pink"}}>.</span></h1>
          </div>
          <div className="col-8 col-md-8" style={{left:"-130px"}}>
          <TestimonialThree data={testimonialData} />

          <div class="services__item__content">
            <p class="services__item__description">
            Монголын гоо сайхны салбарын түүхэн хөгжлийн эзэн, үндэсний шилдэг үйлдвэрлэгч Монос Косметик ХХК нь Монгол орны эрс тэс уур амьсгалд тохирсон Монгол хүний гоо сайхныг төгс хамгаалах бүтээгдэхүүн үйлдвэрлэхээр зорин анхны гараагаа тавьсанаас хойш өөрийн орны гоо сайхны үйлдвэрлэлийн өнгө төрх, хөгжлийг тодорхойлсоор ирсэн билээ. 30 жилийн түүхтэй манай компани нь Монос группийн эм судлалын хүрээлэн, олон улсын гоо сайхны судалгаа, шинжилгээний лабораториудтай хамтран судалгаа хөгжил, шинэлэг технологи нэвтрүүлэхэд онцгой анхаарч ирсэн бөгөөд Монгол орны хөрсөнд ургасан, байгалийн цэвэр түүхий эдээр, олон төрлийн амин хүчил, эрдэс бодис, биологийн идэвхит нэгдлээр баялаг 90 нэр төрлийн гоо сайхны бүтээгдэхүүнийг 80 гаруй ажилтантай нэгдмэл багаараа үйлдвэрлэн хэрэглэгчиддээ хүргэн ажиллаж байна.
              <br></br>
              Монголчуудын гоо сайхны эртний уламжлал, байгаль цаг уурын онцлогт төгс тохирсон  Барагшунтай, Гүүний саамтай, Чацарганатай Биомон арьс арчилгааны иж бүрдэл нь 2005 онд Монгол улсын төрийн шагнал, Дэлхийн оюуны өмчийн байгууллагын алтан медаль хүртсэн, Монголын Худалдаа Аж Үйлдвэрийн Танхимаас “Органик бүтээгдэхүүн”-ий гэрчилгээг гардан авсан Монголын брэнд бүтээгдэхүүнүүд юм. Мөн 2017 онд зах зээлд шинээр нэвтэрсэн Гурамсан хандтай, Чихэр өвсний хандтай, Гангын хандтай гурван төрлийн Биомон шампунь, Хонины сүүлтэй тос, 2019 онд шинээр худалдаанд гарсан хүүхдийн арьс арчилгааны бүтээгдэхүүнүүд нь Монголын Худалдаа Аж Үйлдвэрийн Танхимаас “Органик бүтээгдэхүүн”-ий гэрчилгээгээ гардан авсан.
              <br></br>
              2018 онд Монос Косметик ХХК  100% органик орц найрлагатай, байгальд ээлтэй, дахин боловсруулсан савлагаатай, органик гоо сайхны “МОЙЛ” брэндийг зах зээлд нэвтрүүлсэн. Мойл брэнд нь өнөөдөр 8 нэрийн 66 төрлийн органик арьс арчилгааны бүтээгдэхүүн үйлдвэрлэн хэрэглэгчиддээ хүргээд байна. Мойл органик брэндийн бүх бүтээгдэхүүн МХАҮТ-аас Органик бүтээгдэхүүний гэрчилгээгээр баталгаажсан.
              <br></br>
              2016-2018 онд манай компани БНСУ-ын  Даэгү Хааны их сургуулийн  дэргэдэх гоо сайхны судалгаа, хөгжлийн лабораторитой хамтран  шинэ бүтээгдэхүүний технологийн  судалгаа шинжилгээний ажлыг  хамтран хийж 2019 онд 13 нэр төрлийн  шинэ бүтээгдэхүүнийг зах зээлд  амжилттай нэвтрүүлээд байна.
              <br></br>
              Монос Косметик ХХК 2018 онд монголын гоо сайхны үйлдвэрлэлийн салбарт шинэчлэл хийж, салбартаа анхдагч олон улсын ISO 9001:2015 чанарын менежментийн тогтолцоог үйл ажиллагаандаа амжилттай нэвтрүүлж дэлхийн топ-5 баталгаажуулалтын байгууллага болох AFNOR группээс гэрчилгээ гардан авсан. 2020 онд Монос Косметик ХХК нь GMP стандарт бүхий гоо сайхны жишиг үйлдвэрийг ашиглалтанд оруулахыг зорин ажиллаж байна.
            </p>
            <IntroductionSix data={introductionSixData} />

            </div>
         
          </div>
        </div>

      <div className="row" style={{marginTop:"25px"}}>
          <div className="col-4 col-md-4">
           <h1 style={{paddingLeft: "100px", borderBottom:"3px solid pink"}}>Түүхэн замнал<span style={{color:"pink"}}>.</span></h1>
          </div>
        <div className="col-8 col-md-8" style={{left:"-130px"}}>
            <img src="/assets/images/timeline/time line.jpg" alt="Logo" style={{display:"block", marginLeft:"auto", marginRight:'10px;', width:"92%", marginBottom:'50px', borderBottom:"1px solid gray"}} />
        </div>
      </div>

  </div>  

      <CTAOne />
    </LayoutFour>
  );
}
