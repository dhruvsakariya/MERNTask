import React from "react";
import "./App.css";

const HomePage = () => {
  return (
    <div className=" homePageWrapper pt-4   ">
      <video
        controls
        className="rounded Information_video col-md-9 col-11 d-block mx-auto "
        poster="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <div className="py-4 homePageWrapper ">
        <section className="  col-8 mx-auto   ">
          <div className="row gx-5 gy-3 ">
            <div className=" col-md-6 col-12 ">
              <div className="shadow_small">
                <img
                  src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
                  width={50}
                  className="img-fluid mx-3"
                  alt="react js"
                />
                <span className="Technologoy  ">React js</span>
              </div>
            </div>
            <div className=" col-md-6 col-12 ">
              <div className="shadow_small">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKht9dsYz4dS_W9iqi9IeT1Q9zfMVfgfX_FiF9Rn5yPDOuEKLQ-rKvLMFdU-4DlRputR0&usqp=CAU"
                  width={50}
                  className="img-fluid mx-3"
                  alt="react js"
                />
                <span className="Technologoy  ">Node Js</span>
              </div>
            </div>
            <div className=" col-md-6 col-12 ">
              <div className="shadow_small">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXwkfc23PluXFuvDw_j4Mkda9oTH6MLkBsA&usqp=CAU"
                  width={50}
                  className="img-fluid mx-3"
                  alt="react js"
                />
                <span className="Technologoy  ">Express Js</span>
              </div>
            </div>
            <div className=" col-md-6 col-12 ">
              <div className="shadow_small">
                <img
                  src="https://www.ictdemy.com/images/5728/mdb.png"
                  width={50}
                  className="img-fluid mx-3"
                  alt="react js"
                />
                <span className="Technologoy  ">Mongo Db</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
