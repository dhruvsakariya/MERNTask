// Promise
// fetch request ( to laravel )
// axios request ( get , post , put , patch ...)
// firestore requests
// cloud function requests

import axios from "../../../axios/axiosInstance";

export function registerUser(email, password) {
  // return createUserWithEmailAndPassword(auth, email, password);createProfile
  return;
}

export function createProfile(firstName, lastName, email, password) {
  return axios.post("/user/createProfile", {
    email,
    firstName,
    lastName,
    mobile: "(000) 000-0000",
    profileUrl: "https://www.w3schools.com/howto/img_avatar.png",
    gender: "Male",
    password,
    education: "Full Stack Developer",
    address: "Bay Area, San Francisco, CA",
    socialMedia: {
      personal: "https://internet.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    Skills: [
      {
        name: "Web Design",
        skillRate: "30%",
      },
      {
        name: "Website Markup",
        skillRate: "40%",
      },
      {
        name: "One Page",
        skillRate: "50%",
      },
      {
        name: "Mobile Template",
        skillRate: "60%",
      },
      {
        name: "Backend API",
        skillRate: "70%",
      },
    ],
    Hobbies: [
      {
        name: "Web Design",
        skillRate: "50%",
      },
      {
        name: "Website Markup",
        skillRate: "40%",
      },
      {
        name: "One Page",
        skillRate: "30%",
      },
      {
        name: "Mobile Template",
        skillRate: "20%",
      },
      {
        name: "Backend API",
        skillRate: "10%",
      },
    ],
  });
}
