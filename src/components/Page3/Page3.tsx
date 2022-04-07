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

// type UserType = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: string;
//   phone: string;
//   website: string;
//   company: string;
// };

const text: TextType[] = [
	{
		id: 1,
		label: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque, molestias rerum sunt magnam laudantium aut asperiores. Qui magni hic rem non repudiandae animi natus. Recusandae temporibus dolorem, ad distinctio rerum a aut ipsam mollitia dicta eum tempore aliquid minus quam! Recusandae eaque alias deleniti cupiditate similique vero, in non.",
		direction: "left",
		delay: 0,
		className: styles.float,
	},
	{
		id: 2,
		label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates quisquam dolorum non earum ad, alias libero iure, vero saepe dolore officiis tempore, repellat inventore voluptas atque debitis. Consequuntur, recusandae!",
		direction: "right",
		delay: 0,
		className: styles.floaty,
	},
];

const Page3 = () => {
	// const { data, setData, loading } = useFetch<UserType>("/users.json");

	return (
		<div className={styles.page3wrapper}>
			<div className={styles["text-container"]}>
				{text.map(item => (
					<FloatingText
						className={item.className}
						direction={item.direction}
						delay={item.delay}
					>
						<h2>{item.label}</h2>
					</FloatingText>
				))}
			</div>
		</div>
	);
};

export default Page3;
