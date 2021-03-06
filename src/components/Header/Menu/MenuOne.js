import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { renderContainer } from "../../../common/utils";

export default function MenuOne({ container }) {
  return (
    <div className="menu -style-1">
      <div className={renderContainer(container)}>
        <div className="menu__wrapper">
          <Link href="/homepages/homepage1">
            <a className="menu__wrapper__logo">
              <img src="/assets/images/4.png" alt="Logo" style={{height: "45px"}}/>
            </a>
          </Link>
          <Navigator />
          <MenuFunctionIcons />
        </div>
      </div>
    </div>
  );
}
