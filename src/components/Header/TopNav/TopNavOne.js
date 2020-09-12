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
          style={{ color:"#ffffff" }}
          href="https://www.facebook.com/monoscosmetics"
        >
          <i className="fab fa-facebook-f fa-lg" />
        </a>
      </li>
      <li>
        <a style={{ color:"#ffffff" }} href="https://twitter.com/Monos_cosmetic">
          <i className="fab fa-twitter fa-lg" />
        </a>
      </li>
      <li>
        <a
          style={{ color:"#ffffff" }}
          href="https://www.instagram.com/monos_cosmetics/"
        >
          <i className="fab fa-instagram fa-lg" />
        </a>
      </li>
      <li>
        <a
          style={{ color:"#ffffff" }}
          href="https://www.youtube.com/channel/UCURpzcQMb3l0BbKMcVdL9uQ"
        >
          <i className="fab fa-youtube fa-lg" />
        </a>
      </li>
    </ul>
        </div>
      </div>
    </div>
  );
}
