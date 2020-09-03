import Link from "next/link";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { formatCurrency, formatSingleNumber } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";

export default function () {
  const cartState = useSelector((state) => state.cartReducer);
  const { register, handleSubmit, errors } = useForm();
  const {
    register: couponRegister,
    handleSubmit: couponHandleSubmit,
    errors: couponErrors,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onCouponSubmit = (data) => console.log(data);
  return (
    <LayoutFour title="Тооцоо хийх">
      <Breadcrumb title="Тооцоо хийх">
        <BreadcrumbItem name="Нүүр" />
        <BreadcrumbItem name="Дэлгүүр" />
        <BreadcrumbItem name="Тооцоо хийх" current />
      </Breadcrumb>
      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-12  col-lg-8">
              <form>
                <div className="checkout__form">
                  <div className="checkout__form__contact">
                    <div className="checkout__form__contact__title">
                      <h5 className="checkout-title">Бидэнтэй холбогдох мэдээлэл</h5>
                      <p>
                        Хаягтай юу?
                        <Link href={process.env.PUBLIC_URL + "#"}>
                          <a>Нэвтрэх</a>
                        </Link>
                      </p>
                    </div>
                    <div className="input-validator">
                      <input
                        type="text"
                        name="contact"
                        ref={register({ required: true })}
                        placeholder="Emal эсвэл утасны дугаар"
                      />
                      {errors.contact && (
                        <span className="input-error">
                          Please provide a name or email
                        </span>
                      )}
                    </div>
                    <label className="checkbox-label" htmlFor="subcribe-news">
                      <input
                        type="checkbox"
                        id="subcribe-news"
                        name="subcribeNews"
                        ref={register}
                      />
                      Keep me up to dateon news and exclusive offers
                    </label>
                  </div>
                  <div className="checkout__form__shipping">
                    <h5 className="checkout-title">Хүргэлтийн хаяг</h5>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="input-validator">
                          <label>
                            Овог <span>*</span>
                            <input
                              type="text"
                              name="firstName"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.firstName && (
                            <span className="input-error">
                              Овогоо бичнэ үү
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="input-validator">
                          <label>
                            Нэр <span>*</span>
                            <input
                              type="text"
                              name="lastName"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.lastName && (
                            <span className="input-error">
                              Өөрийн нэрээ оруулна уу
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Улс <span>*</span>
                            <input
                              type="text"
                              name="country"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.country && (
                            <span className="input-error">
                              Улсын нэрийг оруулна уу
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Хаяг <span>*</span>
                            <input
                              type="text"
                              name="streetAddress"
                              ref={register({ required: true })}
                              placeholder="Гудамжны хаяг"
                            />
                            <input
                              type="text"
                              name="apartment"
                              ref={register({ required: true })}
                              placeholder="Гэрийн хаяг"
                            />
                          </label>
                          {errors.streetAddress || errors.apartment ? (
                            <span className="input-error">
                              Хаягаа оруулж өгнө үү 
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Хот/Аймаг <span>*</span>
                            <input
                              type="text"
                              name="town"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.town && (
                            <span className="input-error">
                              Заавал бөглөнө үү
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Дүүрэг/Сум <span>*</span>
                            <input
                              type="text"
                              name="state"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.state && (
                            <span className="input-error">
                              Заавал бөглөнө үү
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Zip Код <span>*</span>
                            <input
                              type="text"
                              name="zip"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.zip && (
                            <span className="input-error">
                              Заавал бөглөнө үү
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Захиалгын тэмдэглэл
                            <input
                              type="text"
                              name="note"
                              placeholder="Захиалгад ямар нэгэн тусгай зүйл байгаа эсэхээ бичнэ үү"
                              ref={register()}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <label className="checkbox-label" htmlFor="save">
                      <input
                        type="checkbox"
                        id="save"
                        name="saveInfo"
                        ref={register()}
                      />
                      Энэ мэдээллийг дараагийн захиалгад хадгалах
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-12 ml-auto">
                  <div className="checkout__total">
                    <h5 className="checkout-title">Таны захиалга</h5>
                    <form
                      className="checkout__total__coupon"
                      onSubmit={couponHandleSubmit(onCouponSubmit)}
                    >
                      <h5>Coupon Code</h5>
                      <div className="input-validator">
                        <input
                          type="text"
                          placeholder="Your code here"
                          name="coupon"
                          ref={couponRegister({ required: true })}
                        />
                        {couponErrors.coupon && (
                          <span className="input-error">
                            Please provide a coupon code
                          </span>
                        )}
                      </div>
                      <button className="btn -dark">Зөвшөөрөх</button>
                    </form>
                    <div className="checkout__total__price">
                      <h5>Бүтээгдэхүүн</h5>
                      <table>
                        <colgroup>
                          <col style={{ width: "70%" }} />
                          <col style={{ width: "30%" }} />
                        </colgroup>
                        <tbody>
                          {cartState.map((item) => (
                            <tr key={item.cartId}>
                              <td>
                                <span>
                                  {formatSingleNumber(item.cartQuantity)}
                                </span>{" "}
                                x {item.name}
                              </td>
                              <td>
                                {formatCurrency(item.price * item.cartQuantity)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="checkout__total__price__total-count">
                        <table>
                          <tbody>
                            <tr>
                              <td>Өмнөх үнэ</td>
                              <td>{calculateTotalPrice(cartState, true)}</td>
                            </tr>
                            <tr>
                              <td>Нийт үнэ</td>
                              <td>{calculateTotalPrice(cartState, true)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="checkout__total__price__payment">
                        <label className="checkbox-label" htmlFor="payment">
                          <input
                            type="checkbox"
                            id="payment"
                            name="payment"
                            name="payment"
                            ref={register}
                          />
                          Cheque payment
                        </label>
                        <label className="checkbox-label" htmlFor="paypal">
                          <input
                            type="checkbox"
                            id="paypal"
                            name="paypal"
                            name="paypal"
                            ref={register}
                          />
                          PayPal
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn -red"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Захиалга өгөх
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
