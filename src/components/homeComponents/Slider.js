import React, { useEffect, useState } from "react";
import "./slider.css";
import "./sliderRes.css";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Slider = () => {
  // images array
  let [imagesCountainer, setImagesCountainer] = useState([]);

  const [activeImg, setActiveImg] = useState(0);

  // get images from cloud storage
  const imgSliderRef = ref(storage, "/Home/Top-img-slider");
  useEffect(() => {
    listAll(imgSliderRef)
      .then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImagesCountainer((prev) => [...prev, url]);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //function to show next images on click to the next btn
  const next = () => {
    activeImg >= imagesCountainer.length - 1
      ? setActiveImg(0)
      : setActiveImg(activeImg + 1);
  };

  //useEffect to auto show the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((seconds) => seconds + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  //uesEffect to reshow the next image if the items in array end
  useEffect(() => {
    activeImg >= imagesCountainer.length
      ? setActiveImg(0)
      : setActiveImg(activeImg);
  }, [activeImg]);

  //function to show prev images on click to the prev btn
  const prev = () => {
    activeImg <= 0
      ? setActiveImg(imagesCountainer.length - 1)
      : setActiveImg(activeImg - 1);
  };

  return (
    <div className="slider-container">
      <div className="prev" onClick={prev}>
        <MdOutlineArrowBackIos />
      </div>
      <div className="next" onClick={next}>
        <MdOutlineArrowForwardIos />
      </div>
      {imagesCountainer.map((imgURL, index) => {
        return (
          <div
            className={activeImg === index ? "slider-active" : "slider"}
            key={index}
          >
            {<img src={imgURL} alt="active-img" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
