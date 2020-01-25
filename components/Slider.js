import styles from "./Slider.module.scss";

const Slider = ({ currentSlide, setClickGuard, clickGuard, handleClick }) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.previous} onClick={() => [setClickGuard(true), handleClick(-1)]}>
        &#10094;
      </div>
      <div className={styles.next} onClick={() => [setClickGuard(true), handleClick(1)]}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
