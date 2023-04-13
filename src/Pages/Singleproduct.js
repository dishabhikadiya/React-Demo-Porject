import React from "react";
import Breadcrumb from "../Componets/Breadcumb";
import Meta from "../Componets/Meta";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
function Singleproduct() {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"singleproduct"} />
      <Breadcrumb title="singleproduct" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>description</h4>
                <p>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 1 review</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Reviews
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You May Also Like </h3>
            </div>
            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon  position-absolute">
                  <a href="#">
                    <img
                      src="http://localhost:3000/images/wish.svg"
                      alt="wishlist"
                    />
                  </a>
                </div>
                <div className="product-image">
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24_884x.jpg?v=1655098000"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-01_260x.jpg?v=1655098000	"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                    Kids headphone bulk 10 pack multi colored for studants
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />

                  <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <img
                      src="http://localhost:3000/images/prodcompare.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/view.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/add-cart.svg"
                      alt="addcart"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <img
                    src="http://localhost:3000/images/wish.svg"
                    alt="wishlist"
                  />
                </div>
                <div className="product-image">
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_260x.jpg?v=1655097254"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="	https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_00_260x.jpg?v=1655097265"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                    Kids headphone bulk 10 pack multi colored for studants
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />

                  <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <img
                      src="http://localhost:3000/images/prodcompare.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/view.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/add-cart.svg"
                      alt="addcart"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img
                    src="http://localhost:3000/images/wish.svg"
                    alt="wishlist"
                  />
                </div>
                <div className="product-image">
                  <img
                    src="/images/tab.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="/images/tab1.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                    Kids headphone bulk 10 pack multi colored for studants
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />

                  <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <img
                      src="http://localhost:3000/images/prodcompare.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/view.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/add-cart.svg"
                      alt="addcart"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="product-card  position-relative">
                <div className="wishlist-icon position-absolute">
                  <img
                    src="http://localhost:3000/images/wish.svg"
                    alt="wishlist"
                  />
                </div>
                <div className="product-image">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_260x.jpg?v=1655096377"
                    className="img-fluid"
                    alt="product"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                    Kids headphone bulk 10 pack multi colored for studants
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />

                  <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <img
                      src="http://localhost:3000/images/prodcompare.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/view.svg"
                      alt="addcart"
                    />
                    <img
                      src="http://localhost:3000/images/add-cart.svg"
                      alt="addcart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Singleproduct;
