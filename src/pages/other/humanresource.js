import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";





export default function services() {
   
    return (
      <LayoutFour title="Хүний нөөц">
        <Breadcrumb title="Хүний нөөц">
          <BreadcrumbItem name="Нүүр" />
          <BreadcrumbItem name="Хүний нөөц" current />
        </Breadcrumb>
        <div className="row" style={{marginLeft:"100px", marginRight:"100px"}}>
          <div className="col-8">
            <h2>МАНАЙД АЖИЛЛАСНААР</h2>
            <p></p>
          </div>
          <div className="col-4">

          </div>
        </div>

        
       
        <InstagramTwo />
      </LayoutFour>
    );
}
 