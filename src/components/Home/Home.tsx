import logo1 from "../../images/005.png";
import halaalbnegru from "../../images/halaalbnegru.jpg";
import { FloatingImage, FloatingText } from "../../reusable-components";

// import styles from "./Home.module.scss";

const Home = () => {
  return (
    <FloatingImage src={halaalbnegru}>
      <div>
        <FloatingText delay={1000} direction="top">
          <img src={logo1} alt="logo water-mark" />
        </FloatingText>
      </div>
    </FloatingImage>
  );
};

export default Home;
