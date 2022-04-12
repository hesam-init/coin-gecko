import { useLayoutEffect, useState } from "react";
import { AnimatedPage } from "../../components/Animated/Animated";
import { useParams } from "react-router-dom";
import { Loader } from "@mantine/core";

const CoinInfo = () => {
  // states
  const [Coin, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);

  let params = useParams();

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;

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
    <AnimatedPage init="50">
      {Loading ? (
        <Loader />
      ) : (
        <div className="border h-full bg-black text-white">
          {params.id} {Coin.name}
        </div>
      )}
    </AnimatedPage>
  );
};

export { CoinInfo };
