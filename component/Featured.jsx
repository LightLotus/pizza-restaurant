import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured1.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => {
          handleArrow("l");
        }}
      >
        <Image src="/img/arrowl.png" alt="arrowl" layout="fill" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => {
          return (
            <div className={styles.imgContainer}>
              <Image
                src={img}
                key={i}
                alt="image slider"
                layout="fill"
                className={styles.imgSlider}
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => {
          handleArrow("r");
        }}
      >
        <Image src="/img/arrowr.png" alt="arrowr" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
