import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
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
  const [show, setShow] = useState(false);
  const [currentImage, showcurrentImage] = useState("");
  function handleShow(breakpoint) {
    setShow(true);
  }

  const { images, urls, loading } = useSelector(gallaryState);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
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
              disabled={loading}
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
              {urls.map((item) => (
                <div key={item} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="gallery-item h-100">
                    <img src={item} className="img-fluid" alt="" />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <a
                        href="/"
                        title="Gallery 1"
                        className="glightbox preview-link"
                        onClick={(e) => {
                          e.preventDefault();
                          showcurrentImage(item);
                          handleShow(true);
                        }}
                      >
                        <i className="bi bi-arrows-angle-expand"></i>
                      </a>
                      <a
                        href={item}
                        target="_blank"
                        rel="noreferrer"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body className="p-0">
          <div className="bg-white d-flex position-fixed top-0 end-0 mx-4 my-2">
            <CloseButton
              className="modal_close_btn"
              onClick={() => setShow(false)}
            />
          </div>
          <img src={currentImage} className="img-fluid w-100 full_img" alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallary;
