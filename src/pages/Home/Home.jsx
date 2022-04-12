import { AnimatedPage } from "../../components/Animated/Animated";
import { useLayoutEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { Coin } from "../../components/Coin/Coin";
import "./home.css";

const Home = () => {
  // states
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";

      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setLoader(false);
        }
        setCoins(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    return () => {
      setCoins([]);
    };
  }, []);

  return (
    <AnimatedPage className="p-3" init="-50">
      {Loading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Coins.map((item) => (
            <Coin
              marketcaprank={item.market_cap_rank}
              price={item.current_price}
              name={item.name}
              img={item.image}
              id={item.id}
              key={item.market_cap_rank}
            />
          ))}
        </div>
      )}
    </AnimatedPage>
  );
};

export { Home };
