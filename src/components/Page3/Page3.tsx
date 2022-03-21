// import { FloatingText } from "../../reusable-components";
import { DirectionType } from "../../reusable-components/FloatingText/FloatingText";
import useFetch from "../../utils/useFetch";
import styles from "./Page3.module.scss";

// type TextType = {
//   id: number;
//   label: string;
//   direction: DirectionType;
//   delay: number;
//   className: string;
// };

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
};

// const text: TextType[] = [
//   {
//     id: 1,
//     label: "Arhitecture is greater than ever idssgb",
//     direction: "left",
//     delay: 0,
//     className: styles.float,
//   },
//   {
//     id: 2,
//     label: "Horia Mihai Coman",
//     direction: "right",
//     delay: 0,
//     className: styles.floaty,
//   },
// ];

const Page3 = () => {
  const { data, setData, loading } = useFetch<UserType>("/users.json");

  console.log(loading);

  return (
    <div className={styles.page3wrapper}>
      {loading ? (
        data.map(item => (
          <div key={item.id} className={styles["text-container"]}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.phone}</p>
            <p>{item.id}</p>
            <p>{item.email}</p>
          </div>
        ))
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};

export default Page3;
