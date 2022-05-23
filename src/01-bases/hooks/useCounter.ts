import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };
  useLayoutEffect(() => {
    if (!elementToAnimate) return;
    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);
  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
