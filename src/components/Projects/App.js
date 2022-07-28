import React from "react";
import "./App.css";

import one from "../../assets/img/one.webp";
import two from "../../assets/img/2.jpg";
import three from "../../assets/img/3.jpg";
import four from "../../assets/img/4.jpg";
import five from "../../assets/img/5.jpg";
import six from "../../assets/img/6.jpg";
import seven from "../../assets/img/7.jpg";
import eight from "../../assets/img/8.jpg";

const Projects = () => {
  return (
    <div className="homePageWrapper py-4">
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={one} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://bizshare.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={two} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://dhruvsakariya.github.io/Portfolio/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 2"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={three} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://nodejsshopapp.herokuapp.com/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 3"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={four} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="http://gratitude-wall.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 4"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={five} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://blog-post-pink.vercel.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 5"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={six} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://blog-post-pink.vercel.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 6"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={seven} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://bizchat.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 7"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={eight} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://threeas.netlify.app/"
                      target={"_blank"}
                      rel="noreferrer"
                      title="Gallery 8"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="/"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Projects;
