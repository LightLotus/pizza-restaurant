import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1>The Best Pizza in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        assumenda qui dolores, sint laborum rerum tenetur. Sint reiciendis vero
        temporibus eligendi, eveniet alias a, nisi animi velit doloribus, fuga
        at? Mollitia, provident sapiente nostrum molestias nobis pariatur libero
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
