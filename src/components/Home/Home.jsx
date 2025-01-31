import React from "react";
import "./Home.css";
import TrendingProducts from "./TrendingProducts";
import { products } from "../../Products";

function Home() {
  return (
    <div class="container-fluid">
      <div>
        <div>
          <ul class="nav justify-content-center mb-4">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home <span class="underline"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Bracelets <span class="underline"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Earrings <span class="underline"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Neckpieces <span class="underline"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Rings <span class="underline"></span>
              </a>
            </li>
          </ul>
        </div>
        <img
          src="https://alistos.in/image/catalog/banners/Top Banner.png"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div className="m-4">
        <h1 className="mt-4 mb-5 text-center text-uppercase fs-3">
          Collections
        </h1>
        <div className="mt-5">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="banner4 banners">
                <div className="inner1">
                  <a href="#" className="banner4 banners position-relative">
                    <img
                      src="https://alistos.in/image/catalog/ring.jpg"
                      alt="Rings Collection"
                      className="img-fluid w-100"
                    />
                    <div className="inner2 position-absolute bottom-0 start-0 w-100 p-3">
                      <h3 className="promo-title">Rings Collection</h3>
                      <hr
                        className="border border-white opacity-50"
                        style={{ width: "50px" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <div className="row gap-4">
                <div className="col-12">
                  <div className="banner5 banners">
                    <div className="inner1">
                      <a href="#" className="banner4 banners position-relative">
                        <img
                          src="https://alistos.in/image/catalog/earrings.jpg"
                          alt="Earrings Collection"
                          className="img-fluid w-100"
                        />
                        <div className="inner2 position-absolute bottom-0 start-0 w-100 p-3 d-flex flex-column align-items-center">
                          <h3 className="promo-title">Earrings Collection</h3>
                          <hr className="border border-white opacity-50" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="banner6 banners">
                    <div className="inner1">
                      <a href="#" className="banner4 banners position-relative">
                        <img
                          src="https://alistos.in/image/catalog/breslate.jpg"
                          alt="Bracelets Collection"
                          className="img-fluid w-100"
                        />
                        <div className="inner2 position-absolute bottom-0 start-0 w-100 p-3 d-flex flex-column align-items-center">
                          <h3 className="promo-title">Bracelets Collection</h3>
                          <hr className="border border-white opacity-50" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 d-none d-md-block">
              <div className="banner7 banners">
                <div className="inner1">
                  <a href="#" className="banner4 banners position-relative">
                    <img
                      src="https://alistos.in/image/catalog/neck.jpg"
                      alt="Necklaces Collection"
                      className="img-fluid w-100"
                    />
                    <div className="inner2 position-absolute bottom-0 start-0 w-100 p-3 d-flex flex-column align-items-center">
                      <h3 className="promo-title">Necklaces Collection</h3>
                      <hr className="border border-white opacity-50" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h1 className="mt-4 mb-4 text-center text-uppercase fs-3">
          Trending Products
        </h1>
        <p className="text-center d-flex flex-column align-items-center mb-5">
          Featured
          <hr
            className="border border-black opacity-50"
            style={{ width: "60px" }}
          />
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {products.map((product) => (
            <div className="col d-flex justify-content-center" key={product.id}>
              <div className="banner4">
                <TrendingProducts
                  src={product.src}
                  alt={product.alt}
                  title={product.title}
                  price={product.price}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
