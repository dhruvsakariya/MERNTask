import axios from "../../../axios/axiosInstance";

export function registerUser(firstName, lastName, email, password) {
  return axios.put("/user/signup", {
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
        skillRate: "80%",
      },
      {
        name: "Website Markup",
        skillRate: "87%",
      },
      {
        name: "One Page",
        skillRate: "75%",
      },
      {
        name: "Mobile Template",
        skillRate: "85%",
      },
      {
        name: "Backend API",
        skillRate: "82%",
      },
    ],
    Hobbies: [
      {
        name: "Web Design",
        skillRate: "72%",
      },
      {
        name: "Website Markup",
        skillRate: "78%",
      },
      {
        name: "One Page",
        skillRate: "88%",
      },
      {
        name: "Mobile Template",
        skillRate: "69%",
      },
      {
        name: "Backend API",
        skillRate: "90%",
      },
    ],
  });
}
