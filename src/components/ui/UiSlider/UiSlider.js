import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function UiSlider(props) {
	const sliderSettings = {
		speed: 500,
		slidesToShow: 2,
		swipe: true,
		slidesToScroll: 2,
		arrows: false,
	};

	return <Slider {...sliderSettings}>{props.children}</Slider>;
}
