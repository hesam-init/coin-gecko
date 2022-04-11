const Coin = (props) => {
  return (
    <div
      className="rounded-lg p-3 bg-white flex items-center gap-5 transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:cursor-pointer hover:-translate-y-1"
      id={props.id}
    >
      <img
        src={props.img}
        alt={props.id}
        title={props.name}
        className="w-16 rounded-full bg-white"
      />
      <span className="text-black">
        {props.name}
        {props.price}
      </span>
    </div>
  );
};

export { Coin };
