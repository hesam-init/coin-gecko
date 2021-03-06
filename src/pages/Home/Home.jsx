import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { currency } from "../../assets/currency/currency";
import { LoadingEffect } from "../../components/Loading/LoadingEffect";
import { AnimatedPage } from "../../components/Animated/Animated";
import { Coin } from "../../components/Coin/Coin";
import "./home.css";

const Home = () => {
  // states
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);
  const [query, setQuery] = useState("");

  useLayoutEffect(() => {
    // change icon
    const changeIcon = () => {
      let docHead = document.getElementsByTagName("head")[0];
      let newLink = docHead.querySelector("#fav");
      newLink.href = `https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579`;
    };
    changeIcon();

    // fetch data
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1";

      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setLoader(false);
          setCoins(json);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AnimatedPage className="p-3">
      <div className="bg-white mb-9 rounded-xl overflow-hidden sticky top-5 z-50">
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
            <motion.div
              transition={{ duration: 0.8, type: "spring" }}
              initial={{ visibility: "hidden", opacity: 0, scale: 0.5, y: 25 }}
              whileInView={{
                visibility: "visible",
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              // animate={{ opacity: 1, scale: 1 }}
              key={item.id}
            >
              <Coin
                marketcaprank={item.market_cap_rank}
                price={currency(item.current_price)}
                name={item.name}
                img={item.image}
                id={item.id}
                key={item.market_cap_rank}
                symbol={item.symbol}
              />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatedPage>
  );
};

export { Home };
