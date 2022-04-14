import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./coin.css";

const Coin = (props) => {
  // my props
  const { name, marketcaprank, price, img, id, symbol } = props;

  // text format
  const convertText = (text) => {
    let name = `${text.toUpperCase()}`;
    name = name.replaceAll("-", "");
    return name;
  };

  return (
    <Link to={`/coin/${id}`}>
      <div
        data-aos="fade-up"
        className="shadow-effect rounded-lg p-3 px-4 flex items-center gap-5 transition-all duration-300 ease-in-out hover:cursor-pointer hover:translate-y-1 hover:shadow h-24"
        id={id}
      >
        <LazyLoadImage
          alt={id}
          src={img}
          className="w-9 md:w-10 lg:w-12 bg-white img-shadow rounded-full"
        />
        <h1 className="text-white flex items-center gap-3 font-bold">
          <span>{convertText(symbol)}</span>
          <span>{price} $</span>
          <span>Rank : {marketcaprank}</span>
        </h1>
      </div>
    </Link>
  );
};

export { Coin };
