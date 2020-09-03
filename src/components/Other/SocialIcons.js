import classNames from "classnames";

export default function SocialIcons({ className, colored }) {
  return (
    <ul className={`${classNames(className)} social-icons`}>
      <li>
        <a
          style={{ color: colored && "#2463ac" }}
          href="https://www.facebook.com/monoscosmetics"
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a style={{ color: colored && "#00c4fc" }} href="https://twitter.com/Monos_cosmetic">
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a
          style={{ color: colored && "#dd34c1" }}
          href="https://www.instagram.com/monos_cosmetics/"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a
          style={{ color: colored && "#ff081c" }}
          href="https://www.youtube.com/channel/UCURpzcQMb3l0BbKMcVdL9uQ"
        >
          <i className="fab fa-youtube" />
        </a>
      </li>
    </ul>
  );
}
