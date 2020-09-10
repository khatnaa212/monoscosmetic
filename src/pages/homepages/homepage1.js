import LayoutOne from "../../components/Layout/LayoutOne";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import sliderData from "../../data/slider/sliderOne.json";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/introduction/introductionTwo.json";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../../data/products.json";
import TeamOne from "../../components/Sections/Team/TeamOne";
import teamOneData from "../../data/team/teamOne.json";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import CategeroiesTwo from "../../components/Sections/Categories/CategoriesTwo";
import categoriesTwodata from "../../data/categories/categoryTwo.json";
import TestimonialFour from "../../components/Sections/Testimonial/TestimonialFour";
import testimonialData from "../../data/testimonial/testimonialFour.json";
import testimonialFiveData from "../../data/testimonial/testimonialFive.json";
import TestimonialFive from "../../components/Sections/Testimonial/TestimoniallFive";
import SectionTitleOne from "../../components/Sections/SectionTitle/SectionTitleOne";
import IntroductionEight from "../../components/Sections/Introduction/IntroductionEight";
import introductionEightData from "../../data/introduction/introductionEight.json";





export default function homepage1(){
  return (
    <LayoutOne title="Монос Косметикс" data={sliderData} className="-style-1">
      <SliderTwo  className="-style-1" data={sliderData} showArrows showDots />
     
      <IntroductionOne data={introductionOneData} />
      <SectionTitleOne align="center" spaceBottom="1.875em">
        <h6>РЕКЛАМ ҮЗЭХ</h6>
        </SectionTitleOne>
      <div className style={{marginBottom:"95px", marginTop:"35px"}}>
        <div>
           <IntroductionTwo data={introductionTwoData} />
        </div>
      </div>
      <IntroductionEight data={introductionEightData} />

      <div className="row" style={{marginBottom:"95px", marginTop:"35px"}}>
        <div className="col-6">
        <SectionTitleOne align="center" spaceBottom="1.875em">
        <h6>САРЫН ОНЦЛОХ БҮТЭЭГДЭХҮҮН</h6>
        </SectionTitleOne>
        <TestimonialFive data={testimonialFiveData} />

        </div>
        <div className="col-6">
        <SectionTitleOne align="center" spaceBottom="1.875em">
        <h6>ХЯМДРАЛТАЙ БҮТЭЭГДЭХҮҮН</h6>
        </SectionTitleOne>
        <TestimonialFour data={testimonialData} />     

          </div>
      </div>
      <ProductSlideOne data={productSlideOneData} />
      <TeamOne data={teamOneData} />
      <CTAOne />
    </LayoutOne>
  );
}
