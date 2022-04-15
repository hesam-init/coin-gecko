import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Link to={`/coin/${id}`}>
        <div
          className="shadow-effect rounded-lg p-3 px-4 flex items-center gap-5 transition-all duration-300 ease-in-out hover:cursor-pointer hover:translate-y-1 hover:shadow h-24"
          id={id}
        >
          <LazyLoadImage
            src={img}
            className="w-9 md:w-10 lg:w-12 h-9 md:h-10 lg:h-12 bg-white img-shadow rounded-full"
          />
          <h1 className="text-white flex items-center gap-3 font-bold">
            <span>{convertText(symbol)}</span>
            <span>{price}</span>
            <span>Rank : {marketcaprank}</span>
          </h1>
        </div>
      </Link>
    </motion.div>
  );
};

export { Coin };
