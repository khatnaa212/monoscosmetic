import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import CompanyItem from "../../components/Pages/company/CompanyItem";
import { formatSingleNumber } from "../../common/utils";
import companyData from "../../data/pages/company.json";

export default function company() {
  return (
    <LayoutFour title="Компаны тухай">
      <Breadcrumb title="Компаны тухай">
        <BreadcrumbItem name="Нүүр" />
        <BreadcrumbItem name="Компаны тухай" current />
      </Breadcrumb>
      {companyData &&
        companyData.map((item, index) => (
          <CompanyItem
            key={index}
            bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
            title={item.title}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}

    </LayoutFour>
  );
}
