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
        <div className="row" style={{marginLeft:"100px", marginRight:"100px", marginBottom:"100px", marginTop:"100px"}}>
          <div className="col-8">
            <h2 style={{fontFamily:"Mogul Magistral recular normal"}}>Хүний нөөцийн бодлого:</h2>
            <p style={{fontFamily:"Mogul Magistral recular normal", lineHeight:"35px", marginTop:"25px"}}>Ажилтан бүрийн мэргэжил, ур чадварт тулгуурласан чадварлаг багийн ажиллагааг орчин үеийн хүний нөөцийн менежментийн арга технологитай хослуулж, бизнесийн урт хугацааны тогтвортой амжилтыг бий болгохыг зорьдог бөгөөд ингэхдээ ажилтны тасралтгүй суралцах, өсөж хөгжих эрмэлзлийг идэвхитэй дэмжин, ажиллангаа суралцах, мэдлэг ур чадварыг бий болгох таатай нөхцөлийг олгоно.<br></br>

Хүний нөөц нь байгууллагын бусад нөөцүүдээс илүү баялаг, үйл ажиллагаанд оролцохын  хирээр улам бүр хөгжин дэвжиж байдаг бөгөөд ажилтан бүрийн авьяас чадвар, нөөц боломжийг нээн илрүүлж хөгжүүлэх, тэдний санаачлагыг дэмжих, урамшуулах, зорилгоо хэрэгжүүлэх эрмэлзлэл төрүүлэх, дэмжлэг үзүүлэх, орчин бүрдүүлэхэд оршино.

</p>
          </div>
          <div className="col-4">

          </div>
        </div>

        
       
        <InstagramTwo />
      </LayoutFour>
    );
}
 