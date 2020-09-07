import LayoutOne from "../../components/Layout/LayoutOne";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import sliderData from "../../data/slider/sliderOne.json";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/introduction/introductionTwo.json";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../../data/products.json";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../../data/testimonial/data.json";
import TeamOne from "../../components/Sections/Team/TeamOne";
import teamOneData from "../../data/team/teamOne.json";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import CategeroiesTwo from "../../components/Sections/Categories/CategoriesTwo";
import categoriesTwodata from "../../data/categories/categoryTwo.json";
import TestimonialFour from "../../components/Sections/Testimonial/TestimonialFour";
import testimonialData from "../../data/testimonial/testimonialFour.json";
import testimonialFiveData from "../../data/testimonial/testimonialFive.json";
import TestimonialFive from "../../components/Sections/Testimonial/TestimoniallFive";







export default function homepage1() {
  return (
    <LayoutOne title="Монос Косметикс" data={sliderData} className="-style-1">
      <SliderTwo data={sliderData} className="-style-1" showDots />
      <CategeroiesTwo data={categoriesTwodata}/>
      <IntroductionOne data={introductionOneData} />
      <IntroductionTwo data={introductionTwoData} />
      <ProductSlideOne data={productSlideOneData} />
      <TestimonialOne data={testimonialOneData} />
      <div className="row" style={{marginBottom:"95px"}}>
        <div className="col-6">
      
        <TestimonialFive data={testimonialFiveData} />

        </div>
        <div className="col-6">
        <TestimonialFour data={testimonialData} />     

          </div>
      </div>
      <TeamOne data={teamOneData} />
      <CTAOne />
    </LayoutOne>
  );
}
