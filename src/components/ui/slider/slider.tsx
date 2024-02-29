"use client"
import ArrowRight from "@/shared/assets/icon/arrow_right.svg";
import { useEffect, useState } from "react";
import News from "../news/news";
import Style from './slider.module.css';

type ImageSliderProps = {
  sliderItem: {
    id: number
    url?: string
    alt: string
  }[]
}


const sliderItem = [
  { id: 0, alt: "ExcitingLaunches" },
  { id: 1, alt: "ExcitingLaunches" },
  { id: 2, alt: "ExcitingLaunches" },
  { id: 3, alt: "ExcitingLaunches" },
  { id: 4, alt: "ExcitingLaunches" },
]

export function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      showNextImage();
      setCount(count + 1)
    }, 5000);
    return () => clearTimeout(timer);
  }, [count])

  function showNextImage() {
    setImageIndex(index => {
      if (index === sliderItem.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return sliderItem.length - 1
      return index - 1
    })
  }

  return (
    <section
      className="image-lider"
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        margin: "0 auto",
        borderRadius: "20px"
      }}
    >
      <a href="#after-image-slider-controls" className={Style.skipLink}>
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          borderRadius: "20px"
        }}
      >
        {sliderItem.map(({ id, }, index) => (
          <div className={Style.sliderItem} key={id}
            aria-hidden={imageIndex !== index}
            style={{ translate: `${-100 * imageIndex}%` }}>
            <News />
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={Style.imgSliderBtn}
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowRight style={{ transform: "rotate(180deg)" }} />
      </button>
      <button
        onClick={showNextImage}
        className={Style.imgSliderBtn}
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {sliderItem.map((_, index) => (
          <button
            key={index}
            className={Style.imgSliderDotBtn}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <svg viewBox="0 0 120 120" version="1.1"
                fill="var(--secondary-background-color);"
                xmlns="http://www.w3.org/2000/svg">
                <circle fill="var(--secondary-background-color)" cx="60" cy="60" r="55" />
              </svg>
            ) : (
              <svg viewBox="0 0 120 120" version="1.1"
                fill="var(--secondary-background-color);"
                xmlns="http://www.w3.org/2000/svg">
                <circle fill="var(--secondary-background-color)" cx="60" cy="60" r="50" />
              </svg>
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}
