import { useRef, useEffect, useMemo } from "react";
import ListWatched from "./ListWatched";
import WindowSize from "./WindowSize";

const getStepByWidth = (width) => {
  if (width <= 480) return 350;
  if (width <= 768) return 370;
  return 370;
};

const ArrowSlider = () => {
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  const movieListRef = useRef(null);

  // const step = 375;
  const animationDuration = 800;
  const isAnimating = useRef(false);

  const windowWidth = WindowSize();
  const step = useMemo(() => getStepByWidth(windowWidth), [windowWidth]);

  useEffect(() => {
    if (!movieListRef.current) return;

    const handleRightClick = () => {
      if (isAnimating.current || !movieListRef.current) return;

      const movieList = movieListRef.current;
      const transformValue = getComputedStyle(movieList).transform;
      const itemCount = movieList.querySelectorAll("img").length;
      // const visibleCount = Math.floor(window.innerWidth / step);
      const visibleCount = Math.floor(windowWidth / step);
      const maxTranslate = (itemCount - visibleCount) * step;

      // const currentX =
      //   new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;
      const currentX =
        transformValue === "none"
          ? 0
          : new DOMMatrixReadOnly(transformValue).m41;

      if (Math.abs(currentX) < maxTranslate) {
        isAnimating.current = true;
        movieList.style.transform = `translateX(${currentX - step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    const handleLeftClick = () => {
      if (isAnimating.current) return;

      const movieList = movieListRef.current;
      const transformValue = getComputedStyle(movieList).transform;
      // const currentX =
      //   new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;
      const currentX =
        transformValue === "none"
          ? 0
          : new DOMMatrixReadOnly(transformValue).m41;

      if (currentX < 0) {
        isAnimating.current = true;
        movieList.style.transform = `translateX(${currentX + step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    arrowRightRef.current?.addEventListener("click", handleRightClick);
    arrowLeftRef.current?.addEventListener("click", handleLeftClick);

    return () => {
      arrowRightRef.current?.removeEventListener("click", handleRightClick);
      arrowLeftRef.current?.removeEventListener("click", handleLeftClick);
    };
  }, [step, windowWidth]);

  return (
    <>
      <ListWatched
        arrowRight={arrowRightRef}
        arrowLeft={arrowLeftRef}
        movieList={movieListRef}
      />
    </>
  );
};

export default ArrowSlider;
