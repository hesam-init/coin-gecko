import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./coin.css";
import { useLayoutEffect } from "react";

const Coin = (props) => {
  useLayoutEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
      duration: 850,
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <Link to={`/coin/${props.id}`}>
      <div
        data-aos="flip-down"
        className="shadow-effect rounded-lg p-3 bg-white flex items-center gap-5 transition-all duration-300 ease-in-out hover:cursor-pointer hover:translate-y-1 hover:shadow h-24"
        id={props.id}
      >
        <LazyLoadImage
          alt={props.id}
          src={props.img}
          className="w-12 bg-white img-shadow rounded-full"
        />
        <span className="text-black">
          {props.name}
          {props.price}
        </span>
      </div>
    </Link>
  );
};

export { Coin };
