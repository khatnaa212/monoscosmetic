import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import SocialIcons from "../Other/SocialIcons";
import { blog } from "../../common/variables";
import { convertToSlug } from "../../common/utils";
import blogData from "../../data/blog/blog.json";
import { getCategoryQuantity } from "../../common/postSelect";
import PostCarThree from "../Post/PostCarThree";
import SubscribeEmail from "../Other/SubcribeEmail";

export default function BlogSidebar({ limit, popularPostData }) {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    errors: errors2,
  } = useForm();
  const onSearchSubmit = (data) => {
    router.push({
      pathname: process.env.PUBLIC_URL + "/blog",
      query: { search: data.search },
    });
  };
  const onNewsSubmit = (data) => console.log(data);
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__section -search">
        <form onSubmit={handleSubmit(onSearchSubmit)}>
          <input
            type="text"
            placeholder="Хайх"
            name="search"
            ref={register}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="input-validator">
          {errors.search && (
            <span className="input-error"></span>
          )}
        </div>
      </div>
      <div className="blog-sidebar__section">
        <h5 className="blog-sidebar__title">Биднийг дагаарай</h5>
        <SocialIcons className="-border -round -border--light-bg" />
      </div>
      <div className="blog-sidebar__section -categories">
        <h5 className="blog-sidebar__title">Төрлүүд</h5>
        <ul>
          {blog.CATEGORIES.map((item, index) => (
            <li key={index}>
              <Link
                href={process.env.PUBLIC_URL + "#"}
                as={process.env.PUBLIC_URL + "#"}
              >
                <a>
                  {item}
                  <span>{getCategoryQuantity(blogData, item)}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-sidebar__section -polular-post">
        <h5 className="blog-sidebar__title">Түгээмэл нийтлэл</h5>
        {popularPostData &&
          popularPostData
            .slice(0, limit)
            .map((post, index) => <PostCarThree key={index} data={post} />)}
      </div>
    </div>
  );
}
