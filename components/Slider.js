import styles from "./Slider.module.scss";

const Slider = ({ currentSlide, setClickGuard, isAnimating, handleClick }) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.previous} onClick={() => [!isAnimating && handleClick(-1)]}>
        &#10094;
      </div>
      <div className={styles.next} onClick={() => [!isAnimating && handleClick(1)]}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
