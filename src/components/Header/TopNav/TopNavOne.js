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
          <ul className="social-icons">
      <li>
        <a
          style={{ color:"#2463ac" }}
          href="https://www.facebook.com/monoscosmetics"
        >
          <i className="fab fa-facebook-f fa-lg" />
        </a>
      </li>
      <li>
        <a style={{ color:"#00c4fc" }} href="https://twitter.com/Monos_cosmetic">
          <i className="fab fa-twitter fa-lg" />
        </a>
      </li>
      <li>
        <a
          style={{ color:"#dd34c1" }}
          href="https://www.instagram.com/monos_cosmetics/"
        >
          <i className="fab fa-instagram fa-lg" />
        </a>
      </li>
      <li>
        <a
          style={{ color:"#ff081c" }}
          href="https://www.youtube.com/channel/UCURpzcQMb3l0BbKMcVdL9uQ"
        >
          <i className="fab fa-youtube fa-lg" />
        </a>
      </li>
    </ul>
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
