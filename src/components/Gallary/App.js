import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import {
  fileSelectedHandler,
  gallaryState,
  uploadImageAsync,
} from "./reduxSlice";

const Gallary = () => {
  // const [values, setValues] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { images } = useSelector(gallaryState);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    setIsButtonDisabled(true);
    // createPostCallback();
    dispatch(uploadImageAsync({ images }));
  }

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="homePageWrapper">
      {/* form */}
      <div className="text-center">
        <Form
          onSubmit={onSubmit}
          className="p-3 rounded-2 d-inline-block mx-auto text-center border"
        >
          <Form.Group className="">
            <label className="ImagePlaceHolder" htmlFor="Image">
              <img
                src={
                  "https://gratitude-wall-server.herokuapp.com/images/UploadNewImage.jpg"
                }
                className="rounded"
                alt="gallary"
              />
              <input
                placeholder="Image"
                id="Image"
                title=""
                multiple={true}
                className="unVisible mx-3"
                name="images"
                type="file"
                onChange={(e) => {
                  dispatch(fileSelectedHandler({ files: e.target.files }));
                }}
                accept="image/*"
              />
            </label>

            <Button
              type="submit"
              disabled={isButtonDisabled}
              className="SubmitButton py-0"
              color="teal"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>

      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              {/* {images.map((item) => (
                <div key={item} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item h-100">
                    <img src={item} className="img-fluid" alt="" />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a
                        href="https://source.unsplash.com/random/?productivity,city"
                        title="Gallery 1"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-arrows-angle-expand"></i>
                      </a>
                      <a href="gallery-single.html" className="details-link">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))} */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 2"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 3"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 4"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 5"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 6"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 7"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 8"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 9"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 10"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 11"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://source.unsplash.com/random/?productivity,city"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://source.unsplash.com/random/?productivity,city"
                      title="Gallery 12"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
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

export default Gallary;
