import styles from "./Navbar.module.scss";
import cx from "classnames";

const Navbar = ({ currentSlide, slideArr }) => {
  return (
    <div className={styles.mainContainer}>
      {slideArr.map(index => (
        <div key={index} className={cx(styles.tick, { [styles.tick__selected]: currentSlide === index })} />
      ))}
    </div>
  );
};

export default Navbar;
