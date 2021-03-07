import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function UiSlider(props) {
  const sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderSettingsDefault = {
    speed: 500,
    slidesToShow: 2,
    swipe: true,
    slidesToScroll: 1,
    arrows: false,
  };
  const slides = props.children.filter((slide) => slide !== undefined);
  const settingSlides =
    slides.length === 1 ? sliderSettings : sliderSettingsDefault;

  return <Slider {...settingSlides}>{slides}</Slider>;
}
