import Link from "next/link";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";
import ProductDetailInfo from "../../ProductDetail/Elements/ProductDetailInfo";


import menuData from "../../../data/header/navigation.json";

export default function Navigator({ disableSubmenu, className, data }) {
  function renderMenu() {
    return menuData.map((item, index,data) => {
      if (item.title === "Нүүр") {
        // return (
        //   <li className="relative" key={index}>
        //     <Link href={process.env.PUBLIC_URL + item.to}>
        //       <a>
        //         {item.title}
        //         <span className="dropable-icon">
        //           <i className="fas fa-angle-down"></i>
        //         </span>
        //       </a>
        //     </Link>
        //     <ul className="dropdown-menu">
        //         {item.subMenu.map((i, index)=>(
        //             <li key={index}>
        //               <Link href={i.to}>
        //                 <a>{i.title}</a>
        //               </Link>
        //             </li>
        //         ))}
        //     </ul>
        //   </li>
        // );
      }
      if(item.title==="Компаны тухай") {
        // return(
        //   <li className="relative" key={index}>
        //     <Link href={process.env.PUBLIC_URL + item.to}>
        //       <a>
        //         {item.title}
        //         <span className="dropable-icon">
        //           <i className="fas fa-angle-down"></i>
        //         </span>
        //       </a>
        //     </Link>
        //     <ul className="dropdown-menu">
        //       {item.subMenu.map((i,index)=>(
        //         <li key={index}>
        //           <Link href={i.to}>
        //             <a>{i.title}</a>
        //           </Link>
        //         </li>
        //       ))}
        //     </ul>
        //   </li>
        // );
      }
      if(item.title==="ХҮНИЙ НӨӨЦ"){
        return(
          <li className="relative" key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <a>
                {item.title}
                <span className="dropable-icon">
                  <i className="fas fa-angle-down"></i>
                </span>
              </a>
            </Link>
            <ul className="dropdown-menu" style={{width:"300px"}}>
              <ul className="dropdown-menu__col">
                {item.subMenu.slice(0,3).map((i,index)=>(
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + i.to}>
                      <a>{i.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </li>
        )
      }
      if (item.title === "БҮТЭЭГДЭХҮҮН") {
        return (
          <li key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <a>
                {item.title}
                <span className="dropable-icon">
                  <i className="fas fa-angle-down"></i>
                </span>
              </a>
            </Link>
            <ul className="dropdown-menu -wide">
              <ul className="dropdown-menu__col">
                {item.subMenu.slice(0, 6).map((i, index) => (
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + i.to}>
                      <a>{i.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="dropdown-menu__col -banner">
                <Link href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}>
                  <a>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/product/Biogen_zovhi.jpg"
                      }
                      alt="New product banner"
                    />
              <h2>{data.name}</h2>
                  </a>
                </Link>
                
              </ul>
              <ul className="dropdown-menu__col -banner">
                <Link href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}>
                  <a>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/product/Biogen_cream.jpg"
                      }
                      alt="New product banner"
                    />
                  </a>
                </Link>
              </ul>
              <ul className="dropdown-menu__col -banner">
                <Link href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}>
                  <a>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/product/biogen_hand.jpg"
                      }
                      alt="New product banner"
                    />
                  </a>
                </Link>
              </ul>
            </ul>
          </li>
        );
      }
      return (
        <li key={index}>
          <Link href={process.env.PUBLIC_URL + item.to}>
            <a>{item.title}</a>
          </Link>
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}