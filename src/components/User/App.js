import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserAsync,
  updateUserAsync,
  userState,
  setFirstName,
  setLasttName,
  setMobileNum,
  setGender,
  setAddress,
  setEducation,
  setSocialMediaPersonal,
  setSocialMediaGithub,
  setSocialMediaTwitter,
  setSocialMediaInstagram,
  setSocialMediaFacebook,
  setHobbies,
  setHobbiesValue,
  setSkills,
  setSkillsValue,
  setProfileUrl,
} from "./reduxSlice";

import "./App.css";

const User = () => {
  const [updateProfile, setUpdateProfile] = useState(false);

  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    education,
    email,
    mobile,
    profileUrl,
    gender,
    address,
    socialMedia,
    Hobbies,
    Skills,
  } = useSelector(userState);
  const navigate = useNavigate();

  const saveProfileHandler = () => {
    setUpdateProfile(false);
    dispatch(updateUserAsync({}));
  };

  useEffect(() => {
    dispatch(getUserAsync({ navigate }));
  }, [dispatch, navigate]);

  return (
    <div className="profile_section">
      <section style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  {updateProfile ? (
                    <input
                      type={"url"}
                      placeholder="new profile url"
                      className="my-5"
                      onChange={(e) => {
                        dispatch(setProfileUrl({ value: e.target.value }));
                      }}
                    />
                  ) : (
                    <img
                      src={profileUrl}
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                  )}

                  <h5 className="my-3">
                    {firstName} {lastName}
                  </h5>

                  {updateProfile ? (
                    <input
                      type={"text"}
                      value={education}
                      onChange={(e) => {
                        dispatch(setEducation({ value: e.target.value }));
                      }}
                    />
                  ) : (
                    <p className="text-muted mb-1">{education}</p>
                  )}

                  <div className="d-flex justify-content-center my-3">
                    {updateProfile ? (
                      <button
                        type="button"
                        onClick={saveProfileHandler}
                        className="btn btn-primary py-0"
                      >
                        Save Changes
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setUpdateProfile(true);
                        }}
                        className="btn btn-primary py-0"
                      >
                        Update Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={socialMedia?.personal}
                          onChange={(e) => {
                            dispatch(
                              setSocialMediaPersonal({ value: e.target.value })
                            );
                          }}
                        />
                      ) : (
                        <p className="mb-0">{socialMedia?.personal}</p>
                      )}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                      ></i>
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={socialMedia?.github}
                          onChange={(e) => {
                            dispatch(
                              setSocialMediaGithub({ value: e.target.value })
                            );
                          }}
                        />
                      ) : (
                        <p className="mb-0">{socialMedia?.github}</p>
                      )}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      ></i>
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={socialMedia?.twitter}
                          onChange={(e) => {
                            dispatch(
                              setSocialMediaTwitter({ value: e.target.value })
                            );
                          }}
                        />
                      ) : (
                        <p className="mb-0">{socialMedia?.twitter}</p>
                      )}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      ></i>
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={socialMedia?.instagram}
                          onChange={(e) => {
                            dispatch(
                              setSocialMediaInstagram({ value: e.target.value })
                            );
                          }}
                        />
                      ) : (
                        <p className="mb-0">{socialMedia?.instagram}</p>
                      )}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      ></i>
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={socialMedia?.facebook}
                          onChange={(e) => {
                            dispatch(
                              setSocialMediaFacebook({ value: e.target.value })
                            );
                          }}
                        />
                      ) : (
                        <p className="mb-0">{socialMedia?.facebook}</p>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">First Name</p>
                    </div>
                    <div className="col-sm-9">
                      {updateProfile ? (
                        <input
                          type={"text"}
                          value={firstName}
                          onChange={(e) => {
                            dispatch(setFirstName({ value: e.target.value }));
                          }}
                        />
                      ) : (
                        <p className="text-muted mb-0">{firstName} </p>
                      )}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Last Name</p>
                    </div>
                    <div className="col-sm-9">
                      {updateProfile ? (
                        <input
                          type={"text"}
                          value={lastName}
                          onChange={(e) => {
                            dispatch(setLasttName({ value: e.target.value }));
                          }}
                        />
                      ) : (
                        <p className="text-muted mb-0">{lastName}</p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      {updateProfile ? (
                        <input
                          type={"tel"}
                          value={mobile}
                          onChange={(e) => {
                            dispatch(setMobileNum({ value: e.target.value }));
                          }}
                        />
                      ) : (
                        <p className="text-muted mb-0">{mobile}</p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">gender</p>
                    </div>
                    <div className="col-sm-9">
                      {updateProfile ? (
                        <>
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            className="mx-1"
                            checked={gender === "Male" ? true : false}
                            value="Male"
                            onClick={(e) => {
                              dispatch(setGender({ value: "Male" }));
                            }}
                          />
                          <label for="html" className="me-2">
                            Male
                          </label>

                          <input
                            type="radio"
                            id="css"
                            name="fav_language"
                            checked={gender === "Female" ? true : false}
                            className="mx-1"
                            value="Female"
                            onClick={(e) => {
                              dispatch(setGender({ value: "Female" }));
                            }}
                          />
                          <label for="css">Female</label>
                        </>
                      ) : (
                        <p className="text-muted mb-0">{gender}</p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      {updateProfile ? (
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => {
                            dispatch(setAddress({ value: e.target.value }));
                          }}
                        />
                      ) : (
                        <p className="text-muted mb-0">{address}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <i className="fa-solid fa-person-dots-from-line mx-2 "></i>{" "}
                        Hobbies
                      </p>
                      {Hobbies?.map(({ name, skillRate }, index) => (
                        <div key={index}>
                          {updateProfile ? (
                            <div className="row">
                              <input
                                type="text"
                                value={name}
                                className="my-2 col-9"
                                onChange={(e) => {
                                  dispatch(
                                    setHobbies({ value: e.target.value, index })
                                  );
                                }}
                              />
                              <input
                                type="number"
                                value={skillRate.split("%")[0]}
                                min="1"
                                max="100"
                                className="my-2 col-3"
                                onChange={(e) => {
                                  dispatch(
                                    setHobbiesValue({
                                      value: e.target.value,
                                      index,
                                    })
                                  );
                                }}
                              />
                            </div>
                          ) : (
                            <p
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {name}
                            </p>
                          )}
                          <div
                            className="progress rounded"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skillRate }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <i className="fa-solid fa-kitchen-set mx-2 "></i> Skills
                      </p>

                      {Skills?.map(({ name, skillRate }, index) => (
                        <div key={index}>
                          {updateProfile ? (
                            <div className="row">
                              <input
                                type="text"
                                value={name}
                                className="my-2 col-9"
                                onChange={(e) => {
                                  dispatch(
                                    setSkills({ value: e.target.value, index })
                                  );
                                }}
                              />
                              <input
                                type="number"
                                value={skillRate.split("%")[0]}
                                className="my-2 col-3"
                                min="1"
                                max="100"
                                onChange={(e) => {
                                  dispatch(
                                    setSkillsValue({
                                      value: e.target.value,
                                      index,
                                    })
                                  );
                                }}
                              />
                            </div>
                          ) : (
                            <p
                              className="mt-4 mb-1"
                              style={{ fontSize: ".77rem" }}
                            >
                              {name}
                            </p>
                          )}
                          <div
                            className="progress rounded"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skillRate }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
