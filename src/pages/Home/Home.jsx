import { useLayoutEffect, useState } from "react";
import { Coin } from "../../components/Coin/Coin";

const Home = () => {
  // states
  const [Coins, setCoins] = useState([]);

  // fetch data
  const fetchData = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";

    try {
      const response = await fetch(url);
      const json = await response.json();
      setCoins(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Coins.map((item) => (
          <Coin
            id={item.id}
            name={item.name}
            price={item.current_price}
            img={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export { Home };
