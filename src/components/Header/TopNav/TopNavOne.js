import React, { useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");

  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <div className="top-nav__wrapper__selectors">
            <Link href={process.env.PUBLIC_URL + "#"}>
              <a className="top-nav__auth">Нэвтрэх/Бүртгүүлэх</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
