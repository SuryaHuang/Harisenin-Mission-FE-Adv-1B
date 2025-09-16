import { useRef, useEffect, useMemo } from "react";
import { ListMovie1 } from "./ListMovie";
import { ListMovie2 } from "./ListMovie";
import { ListMovie3 } from "./ListMovie";
import WindowSize from "./WindowSize";

const getStepByWidth = (width) => {
  if (width <= 480) return 120;
  if (width <= 768) return 250;
  return 250;
};

export const ArrowSlider2 = () => {
  const arrowLeft2Ref = useRef(null);
  const arrowRight2Ref = useRef(null);
  const movieList2Ref = useRef(null);

  const animationDuration = 800;
  const isAnimating = useRef(false);

  const windowWidth = WindowSize();
  const step = useMemo(() => getStepByWidth(windowWidth), [windowWidth]);

  useEffect(() => {
    if (!movieList2Ref.current) return;

    const handleRightClick = () => {
      if (isAnimating.current || !movieList2Ref.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      const itemCount = movieList2.querySelectorAll("img").length;
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
        movieList2.style.transform = `translateX(${currentX - step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    const handleLeftClick = () => {
      if (isAnimating.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      // const currentX =
      //   new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;
      const currentX =
        transformValue === "none"
          ? 0
          : new DOMMatrixReadOnly(transformValue).m41;

      if (currentX < 0) {
        isAnimating.current = true;
        movieList2.style.transform = `translateX(${currentX + step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    arrowRight2Ref.current?.addEventListener("click", handleRightClick);
    arrowLeft2Ref.current?.addEventListener("click", handleLeftClick);

    return () => {
      arrowRight2Ref.current?.removeEventListener("click", handleRightClick);
      arrowLeft2Ref.current?.removeEventListener("click", handleLeftClick);
    };
  }, [step, windowWidth]);

  return (
    <>
      <ListMovie1
        arrowRight2={arrowRight2Ref}
        arrowLeft2={arrowLeft2Ref}
        movieList2={movieList2Ref}
      />
    </>
  );
};

export const ArrowSlider3 = () => {
  const arrowLeft2Ref = useRef(null);
  const arrowRight2Ref = useRef(null);
  const movieList2Ref = useRef(null);

  const animationDuration = 800;
  const isAnimating = useRef(false);

  const windowWidth = WindowSize();
  const step = useMemo(() => getStepByWidth(windowWidth), [windowWidth]);

  useEffect(() => {
    if (!movieList2Ref.current) return;

    const handleRightClick = () => {
      if (isAnimating.current || !movieList2Ref.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      const itemCount = movieList2.querySelectorAll("img").length;
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
        movieList2.style.transform = `translateX(${currentX - step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    const handleLeftClick = () => {
      if (isAnimating.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      // const currentX =
      //   new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;
      const currentX =
        transformValue === "none"
          ? 0
          : new DOMMatrixReadOnly(transformValue).m41;

      if (currentX < 0) {
        isAnimating.current = true;
        movieList2.style.transform = `translateX(${currentX + step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    arrowRight2Ref.current?.addEventListener("click", handleRightClick);
    arrowLeft2Ref.current?.addEventListener("click", handleLeftClick);

    return () => {
      arrowRight2Ref.current?.removeEventListener("click", handleRightClick);
      arrowLeft2Ref.current?.removeEventListener("click", handleLeftClick);
    };
  }, [step, windowWidth]);

  return (
    <>
      <ListMovie2
        arrowRight2={arrowRight2Ref}
        arrowLeft2={arrowLeft2Ref}
        movieList2={movieList2Ref}
      />
    </>
  );
};

export const ArrowSlider4 = () => {
  const arrowLeft2Ref = useRef(null);
  const arrowRight2Ref = useRef(null);
  const movieList2Ref = useRef(null);

  const animationDuration = 800;
  const isAnimating = useRef(false);

  const windowWidth = WindowSize();
  const step = useMemo(() => getStepByWidth(windowWidth), [windowWidth]);

  useEffect(() => {
    if (!movieList2Ref.current) return;

    const handleRightClick = () => {
      if (isAnimating.current || !movieList2Ref.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      const itemCount = movieList2.querySelectorAll("img").length;
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
        movieList2.style.transform = `translateX(${currentX - step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    const handleLeftClick = () => {
      if (isAnimating.current) return;

      const movieList2 = movieList2Ref.current;
      const transformValue = getComputedStyle(movieList2).transform;
      // const currentX =
      //   new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;
      const currentX =
        transformValue === "none"
          ? 0
          : new DOMMatrixReadOnly(transformValue).m41;

      if (currentX < 0) {
        isAnimating.current = true;
        movieList2.style.transform = `translateX(${currentX + step}px)`;

        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration);
      }
    };

    arrowRight2Ref.current?.addEventListener("click", handleRightClick);
    arrowLeft2Ref.current?.addEventListener("click", handleLeftClick);

    return () => {
      arrowRight2Ref.current?.removeEventListener("click", handleRightClick);
      arrowLeft2Ref.current?.removeEventListener("click", handleLeftClick);
    };
  }, [step, windowWidth]);

  return (
    <>
      <ListMovie3
        arrowRight2={arrowRight2Ref}
        arrowLeft2={arrowLeft2Ref}
        movieList2={movieList2Ref}
      />
    </>
  );
};
