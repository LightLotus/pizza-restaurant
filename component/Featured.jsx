import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/featured1.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ];

  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="arrowl" layout="fill" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => {
            <Image src="/img/featured1.jpg" key={i} layout="fill" alt="" />;
          })}
        </div>
      </div>
      <Image src="/img/arrowr.png" alt="arrowr" layout="fill" />
    </div>
  );
};

export default Featured;
