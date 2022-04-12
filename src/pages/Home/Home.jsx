import { useLayoutEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { Link } from "react-router-dom";
import { Coin } from "../../components/Coin/Coin";
import "./home.css";
import { AnimatedPage } from "../../components/Animated/Animated";

const Home = () => {
  // states
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);

  let delayTime = 1;

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setLoader(false);
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
    <AnimatedPage className="p-3 h-full overflow-y-scroll" init="-50">
      {Loading ? (
        <div className="flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Coins.map((item) => (
            <Link to={`/coin/${item.id}`} key={item.market_cap_rank}>
              <Coin
                waitbeforeshow={(delayTime += 50)}
                marketcaprank={item.market_cap_rank}
                price={item.current_price}
                name={item.name}
                img={item.image}
                id={item.id}
              />
            </Link>
          ))}
        </div>
      )}
    </AnimatedPage>
  );
};

export { Home };
