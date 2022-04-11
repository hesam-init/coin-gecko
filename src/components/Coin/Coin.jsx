const Coin = (props) => {
  return (
    <div className="bg-black rounded-lg p-3" id={props.id}>
      <span className="text-white">
        {props.name}
        {props.price}
      </span>
    </div>
  );
};

export { Coin };
