import { AnimatedPage } from "../../components/Animated/Animated";
import { useLayoutEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { Coin } from "../../components/Coin/Coin";
import "./home.css";
import { LoadingEffect } from "../../components/Loading/LoadingEffect";

const Home = () => {
  // states
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);
  const [query, setQuery] = useState("");

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=500&page=1";

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
  }, []);

  return (
    <AnimatedPage className="p-3" init="-50">
      <div className="bg-white mb-5 rounded-lg overflow-hidden sticky top-5 z-50">
        <input
          className="w-full p-3"
          placeholder="Enter Crypto Name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {Loading ? (
        <LoadingEffect />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Coins.filter((item) => {
            if (query === "") {
              return item;
            } else if (
              item.id.toLowerCase().includes(query.toLowerCase()) ||
              item.symbol.toLowerCase().includes(query.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => (
            <Coin
              marketcaprank={item.market_cap_rank}
              price={item.current_price}
              name={item.name}
              img={item.image}
              id={item.id}
              key={item.market_cap_rank}
              symbol={item.symbol}
            />
          ))}
        </div>
      )}
    </AnimatedPage>
  );
};

export { Home };
