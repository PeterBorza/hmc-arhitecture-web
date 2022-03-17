import { FloatingText } from "../../reusable-components";
import { DirectionType } from "../../reusable-components/FloatingText/FloatingText";
import styles from "./Page3.module.scss";

type TextType = {
  id: number;
  label: string;
  direction: DirectionType;
  delay: number;
  className: string;
};

const text: TextType[] = [
  {
    id: 1,
    label: "Arhitecture is greater than ever idssgb",
    direction: "left",
    delay: 0,
    className: styles.float,
  },
  {
    id: 2,
    label: "Horia Mihai Coman",
    direction: "right",
    delay: 0,
    className: styles.floaty,
  },
];

const Page3 = () => {
  return (
    <div className={styles.page3wrapper}>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            <h1 className={styles.truncate}>{item.label}</h1>
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            <h3>{item.label}</h3>
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
      <div className={styles["text-container"]}>
        {text.map(item => (
          <FloatingText
            key={item.id}
            direction={item.direction}
            delay={item.delay}
            className={item.className}
          >
            {item.label}
          </FloatingText>
        ))}
      </div>
    </div>
  );
};

export default Page3;
