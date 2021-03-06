import Link from "next/link";
import { useForm } from "react-hook-form";
import Lightbox from "react-image-lightbox";

import { convertToSlug } from "../../common/utils";
import SocialIcons from "../Other/SocialIcons";
import Button from "../Control/Button";
import ImageLightbox from "../Control/ImageLightbox";

export default function PostContent({ data, children }) {
  const { register, handleSubmit, errors } = useForm();
  const onSearchSubmit = (data) => console.log(data);
  return (
    <div className="post-content">
      <div className="post-content__header">
        <div className="post-content__header__date">
          <h5></h5>
          <p>09.04</p>
        </div>
        <div className="post-content__header__content">
          <div className="post_content__info">
            <p>
              by <span>{data.author}</span>
            </p>
            <Link
              href={process.env.PUBLIC_URL + "#"}
              as={process.env.PUBLIC_URL + "#"}
            >
              <a>{data.category}</a>
            </Link>
          </div>
          <h2>{data.title}</h2>
        </div>
      </div>
      <div className="post-content__body">
        {/* <p className="post-paragraph">
          Like every year, this new year also brought in a lot of resolutions
          that we promised to keep. One such common resolution was pampering our
          skin and while there is a huge possibility that we have done
          absolutely nothing towards it. But there is something about grandma’s
          tips that create a sense of credibility one could always fall back
          upon.
        </p>
        <p className="post-paragraph">
          <span>Wash your face twice – </span>
          Let’s start with the basics. To have a healthy and clear skin you must
          wash whatever has gotten accumulated on the surface of your skin.
        </p>
        <p className="post-paragraph">
          <span>Eat healthy – </span>
          ‘you are what you eat’. It’s as simple as it sounds. All that caffeine
          that you think your body yearns to keep you awake is eventually going
          to take a bad toll on your skin. In fact, whatever you eat has a
          direct impact on your skin.
        </p> */}
        <ImageLightbox
          className="post-image"
          alt="post image"
          imgSrc={"/assets/images/blog/post_img.png"}
        />
        {/* <p className="post-paragraph">
          <span>Drink loads of water - </span>I cannot emphasize this point
          enough. One thing that you cannot skip upon is drinking 3 litres of
          water each day regardless of the weather. Water is a boon sent from
          heaven just for your skin. Drinking water can help you flush out
          toxins which clear all the pimples and bumps from the surface of your
          skin.
        </p> */}
        {/* <p className="post-paragraph">
          <span>Have a skin regime – </span>
          Even if it just includes washing your face and moisturizing it have a
          skin regime. Having a skin regime is similar to having a balanced diet
          for your skin.
        </p> */}
        {/* <div className="post-quote">
          <h5>
            {" "}
            Avoid having an erratic sleep pattern and do not let your work
            create a lot of stress for you either.
          </h5>
          <div className="post-quote__author">
            <i className="fas fa-quote-left"></i>
            <p>Trevor Lawson</p>
          </div>
        </div> */}
        <p className="post-paragraph">
          <span>– </span>
          {data.content}
        </p>
      </div>
      {/* <div className="post-content__footer">
        <div className="post-content__footer__tags">
          <span>Tag:</span>
          {data.tags &&
            data.tags.map((tag, index) => (
              <Button key={index} action="#" color="light" content={tag} />
            ))}
        </div>
        <div className="post-content__footer__share">
          <span>Share:</span>
          <SocialIcons colored />
        </div>
      </div> */}
      <div className="post-content__actions">
        <div className="post-content__actions__change">
          <Link href="#">
            <a className="change-post-btn -prev">
              <i className="fas fa-angle-left"></i>ӨМНӨХ НИЙТЛЭЛ
            </a>
          </Link>
          <Link href="#">
            <a className="change-post-btn -next">
              ДАРААГИЙН НИЙТЛЭЛ
              <i className="fas fa-angle-right"></i>
            </a>
          </Link>
        </div>
        <div className="post-content__actions__comment">
          <form onSubmit={handleSubmit(onSearchSubmit)}>
            <h5>СЭТГЭГДЭЛ ҮЛДЭЭХ</h5>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="name"
                    placeholder="НЭР"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <span className="input-error">Нэрээ бичнэ үү</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL ХАЯГ"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="input-error">Email хаягаа оруулна уу</span>
                  )}
                </div>
              </div>
              {/* <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    ref={register({ required: true })}
                  />
                  {errors.website && (
                    <span className="input-error">
                      Pleave provide a website
                    </span>
                  )}
                </div>
              </div> */}
              <div className="col-12">
                <div className="input-validator">
                  <textarea
                    name="comment"
                    placeholder="СЭТГЭГДЭЛ"
                    rows="5"
                    ref={register({ required: true })}
                  />
                  {errors.comment && (
                    <span className="input-error">
                      Сэтгэгдэлээ бичнэ үү
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="btn -red">Илгээх</button>
          </form>
        </div>
      </div>
    </div>
  );
}
