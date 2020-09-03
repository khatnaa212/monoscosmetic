import Link from "next/link";
import SubcribeEmail from "../Other/SubcribeEmail";

import SocialIcons from "../Other/SocialIcons";
import footerLinks from "../../data/footer/links.json";
import footerInfomation from "../../data/footer/info.json";

export default function FooterOne() {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="footer-one__header">
          <div className="footer-one__header__logo">
            <Link href={process.env.PUBLIC_URL + "/homepages/homepage1"}>
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="footer-one__header__newsletter">
            <span>Биднийг дагах:</span>
            <SubcribeEmail
              mailchimpUrl="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
              placeholder="Email хаягаа оруул"
              btnContent={<i className="fas fa-paper-plane" />}
              className="footer-one-newsletter"
            />
          </div>
          <div className="footer-one__header__social">
            <SocialIcons className="-border" />
          </div>
        </div>
        <div className="footer-one__body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -info">
                <h5 className="footer-title">Бидний тухай</h5>
                <p>
                  Хаяг: <span>{footerInfomation.address}</span>
                </p>
                <p>
                  Утас: <span>{footerInfomation.phone}</span>
                </p>
                <p>
                  Email: <span>{footerInfomation.email}</span>
                </p>
                
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -links">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">Хаяг</h5>
                    <ul>
                      {footerLinks.accountLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">Мэдээлэл</h5>
                    <ul>
                      {footerLinks.informationLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__section -payment">
                <h5 className="footer-title"></h5>
                <div className="payment-methods">
                <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9781655724018!2d106.89776604282635!3d47.91788240945654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc44e131a8a952b15!2zTW9ub3Mg0Y3QvNC40LnQvSDQsdOp06nQvdC40Lkg0YLTqdCy!5e0!3m2!1sen!2smn!4v1599116325115!5m2!1sen!2smn"
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen
              />
                  {/* <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/footer/payment.png"
                    }
                    alt="Payment methods"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__footer">
        <div className="container">
          <div className="footer-one__footer__wrapper">
            <p> Монос косметик ХХК ©2020 ОН.</p>
            {/* <ul>
              {footerLinks.creditLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
