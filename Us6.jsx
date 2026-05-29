import React, { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";

function Us6() {
  const arr = [img1, img2, img3, img4, img5];
  const [myImage, setImage] = useState(arr[0]);

  function changeImage() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setImage(arr[randomIndex]);
  }

  return (
    <>
      <img src={myImage} alt="Random" width="300" />
      <br />
      <button onClick={changeImage}>Change Image</button>
    </>
  );
}

export default Us6;
