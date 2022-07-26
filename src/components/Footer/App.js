import React from "react";

const Footer = () => {
  return (
    <footer class="bg-light py-4">
      <div class="container text-center">
        <p class="font-italic text-muted mb-0">
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
