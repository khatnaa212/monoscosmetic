import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";





export default function services() {
   
    return (
      <LayoutFour title="Түүхэн замнал">
        <Breadcrumb title="Захирлын мэндчилгээ">
          <BreadcrumbItem name="Нүүр" />
          <BreadcrumbItem name="Захирлын мэндчилгээ" current />
        </Breadcrumb>
        <img src="/assets/images/timeline/time line.jpg" alt="Logo" style={{display:"block", marginLeft:"auto", marginRight:'auto', width:"50%", marginBottom:'50px', borderBottom:"1px solid gray"}} />

        
        {/* {servicesData &&
          servicesData.map((item, index) => (
            <ServiceItem
              key={index}
              bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
              smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
              title={item.title}
              order={formatSingleNumber(index + 1)}
              reverse={index % 2 === 1}
            />
          ))} */}
        <InstagramTwo />
      </LayoutFour>
    );
}
 