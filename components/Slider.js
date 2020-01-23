import styles from "./Slider.module.scss";

const Slider = ({ currentSlide, setCurrentSlide, handleAnimation, handleClick }) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.previous} onClick={() => handleClick(-1)}>
        &#10094;
      </div>
      <div className={styles.next} onClick={() => handleClick(1)}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
