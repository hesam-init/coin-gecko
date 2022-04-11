import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinInfo = () => {
  // states
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);

  let params = useParams();

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;

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
    <div>
      <div>{Coins.name}</div>
    </div>
  );
};

export { CoinInfo };
