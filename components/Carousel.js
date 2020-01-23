import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import Slider from "./Slider";
import cx from "classnames";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null);
  const [shifting, setShifting] = useState(false);

  const track = React.createRef();

  const slideArr = [0, 1, 2, 3];
  const upperLimit = slideArr.length - 1;

  const handleAnimation = direction => {
    console.log(direction);
    directions = direction;
  };

  const handleClick = direction => {
    cloneSlides();
    let newSlideNumber = currentSlide + direction;
    direction = direction;
    setShifting(true);

    setCurrentSlide(newSlideNumber);
    setDirection(direction);
  };

  const resetSlide = () => {
    console.log(currentSlide, "currentslide");
    console.log(upperLimit, "upperLimit");
    if (currentSlide === upperLimit + 1) {
      setShifting(false);
      setCurrentSlide(0);
    }
    if (currentSlide === 0) {
      setShifting(false);
      setCurrentSlide(0);
    }
  };

  const cloneSlides = () => {
    let children = [];
    for (let i = 0; i <= upperLimit; i++) {
      children.push(
        <div key={i} className={styles.box}>
          {slideArr[i]}
        </div>
      );
    }
    // const style = window.getComputedStyle(React.findDOMNode(track));
    return children;
  };

  const className = cx(styles.track, {
    [styles.shifting]: shifting
  });

  return (
    <div className={styles.mainContainer}>
      <div>CurrentSlide:{currentSlide}</div>
      <div>direction:{direction}</div>
      <div className={styles.bigContainer}>
        <div
          className={className}
          style={{ transform: `translateX(${(currentSlide + 4) * -152}px)` }}
          ref={track}
          onTransitionEnd={resetSlide}
        >
          {cloneSlides()}
          <div className={styles.box}>{slideArr[0]}</div>
          <div className={styles.box}> {slideArr[1]} </div>
          <div className={styles.box}>{slideArr[2]}</div>
          <div className={styles.box}>{slideArr[3]}</div>
          {cloneSlides()}
        </div>
      </div>
      <Slider {...{ setCurrentSlide, currentSlide, handleAnimation, handleClick }} />
    </div>
  );
};

export default Carousel;
