import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./coin.css";

const Coin = (props) => {
  // aos
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-down" data-aos-once="true">
      <div
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
    </div>
  );
};

export { Coin };
