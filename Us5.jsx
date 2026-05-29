import React, { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

function Us5() {
  const [myImage, setImage] = useState(img1);

  function changeImage() {
    if(myImage===img1){
        setImage(img2)
    }
    else{
        setImage(img1)
    }
  }

  return (
    <>
      <img src={myImage} alt="Toggle" width="300" />
      <br />
      <button onClick={changeImage}>Change Image</button>
    </>
  );
}

export default Us5;
