import React from "react";
import "./App.css";

const HomePage = () => {
  return (
    <div className=" ">
      <video
        controls
        className="rounded Information_video col-md-9 col-11 d-block mx-auto mt-4 "
        poster="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HomePage;
