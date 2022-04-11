const Coin = (props) => {
  return (
    <div
      className="rounded-lg p-3 flex items-center gap-5"
      style={{ background: "#2d3436" }}
      id={props.id}
    >
      <img
        src={props.img}
        alt={props.id}
        title={props.name}
        className="w-16 rounded-full bg-white"
      />
      <span className="text-white">
        {props.name}
        {props.price}
      </span>
    </div>
  );
};

export { Coin };
