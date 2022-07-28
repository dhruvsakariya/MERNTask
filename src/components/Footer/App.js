import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4 ">
      <div className="container text-center">
        <p className="font-italic text-muted mb-0">
          &copy; Copyrights{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://alitainfotech.com"
          >
            {" "}
            alitainfotech.com{" "}
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
