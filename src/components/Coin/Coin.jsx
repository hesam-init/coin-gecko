import "./coin.css";

const Coin = (props) => {
  return (
    <div
      className="shadow-effect rounded-lg p-3 bg-white flex items-center gap-5 transition-all duration-300 ease-in-out hover:cursor-pointer hover:translate-y-1 hover:shadow h-32"
      id={props.id}
    >
      <img
        src={props.img}
        alt={props.id}
        title={props.name}
        className="w-16 bg-white img-shadow rounded-full"
      />
      <span className="text-black">
        {props.name}
        {props.price}
      </span>
    </div>
  );
};

export { Coin };
