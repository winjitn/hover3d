import React, { useEffect } from "react";

import "./App.css";
import img1 from "./pics/img1.jpg";
import img2 from "./pics/img2.jpg";
import img3 from "./pics/img3.jpg";
import img4 from "./pics/img4.jpg";
import img5 from "./pics/img5.jpg";
import img6 from "./pics/img6.jpg";
import img7 from "./pics/img7.jpg";

const animate = () => {
  console.log(1);
  const title = document.querySelectorAll(".l");
  for (var i = 0; i < title.length; i++) {
    const temp = title[i];
    setTimeout(() => {
      setInterval(() => {
        temp.classList.toggle("open");
      }, 2000);
    }, i * 100);
  }
};
export default () => {
  useEffect(() => {
    animate();
  }, []);
  return (
    <div className="body">
      <div className="title">
        <span className="l">H</span>
        <span className="l">O</span>
        <span className="l">V</span>
        <span className="l">E</span>
        <span className="l">R</span>
      </div>
      <div className="ctn">
        <div className="card right2">
          <img src={img4} alt="img1" />
          <div className="content">
            <b>Proin</b> eu convallis tellus, ac ultrices tellus. Cras quis
            turpis ex. Sed faucibus malesuada tempor. Donec facilisis a odio nec
            vulputate. Sed augue velit, convallis quis
          </div>
        </div>
        <div className="card right1">
          <img src={img5} alt="img1" />
          <div className="content">
            <b>Proin</b> eu convallis tellus, ac ultrices tellus. Cras quis
            turpis ex. Sed faucibus malesuada tempor. Donec facilisis a odio nec
            vulputate. Sed augue velit, convallis quis
          </div>
        </div>
        <div className="card right">
          <img src={img1} alt="img1" />
          <div className="content">
            <b>Proin</b> eu convallis tellus, ac ultrices tellus. Cras quis
            turpis ex. Sed faucibus malesuada tempor. Donec facilisis a odio nec
            vulputate. Sed augue velit, convallis quis
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="img2" />
          <div className="content">
            <b>Orci</b> varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur
          </div>
        </div>
        <div className="card left">
          <img src={img3} alt="img3" />
          <div className="content">
            <b>Suspendisse</b> interdum mi maximus risus dignissim vestibulum.
            Vivamus a iaculis enim, in mattis metus. Quisque quis quam sodales,
            tincidunt lorem sit amet, mollis.
          </div>
        </div>
        <div className="card left1">
          <img src={img6} alt="img3" />
          <div className="content">
            <b>Suspendisse</b> interdum mi maximus risus dignissim vestibulum.
            Vivamus a iaculis enim, in mattis metus. Quisque quis quam sodales,
            tincidunt lorem sit amet, mollis.
          </div>
        </div>
        <div className="card left2">
          <img src={img7} alt="img3" />
          <div className="content">
            <b>Suspendisse</b> interdum mi maximus risus dignissim vestibulum.
            Vivamus a iaculis enim, in mattis metus. Quisque quis quam sodales,
            tincidunt lorem sit amet, mollis.
          </div>
        </div>
      </div>
    </div>
  );
};
