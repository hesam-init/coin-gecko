import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { AnimatedPage } from "../../components/Animated/Animated";
import { LoadingEffect } from "../../components/Loading/LoadingEffect";
import { NoInfo } from "../../components/NoInfo/NoInfo";
import { currency } from "../../assets/currency/currency";
import "./coininfo.css";

const CoinInfo = () => {
  // states
  const [Coin, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);

  // get params
  let params = useParams();

  // change favico status
  const changeTitleInfo = (link, name) => {
    let docHead = document.getElementsByTagName("head")[0];
    // change fav
    let newLink = docHead.querySelector("#fav");
    newLink.href = `${link}`;
    // change title
    let newTitle = docHead.querySelector("title");
    newTitle.innerHTML = `${name}`;
    console.log(newLink);
  };

  useLayoutEffect(() => {
    // fetch data
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setLoader(false);
          changeTitleInfo(
            `${json.image.thumb}`,
            `${json.name} ${currency(json.market_data.current_price.usd)} $`
          );
        }
        setCoins(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AnimatedPage init="50">
      {Loading ? (
        <LoadingEffect />
      ) : (
        <div className="grid grid-cols-4 grid-rows-2 gap-2 px-5 py-5 h-full lg:h-screen">
          {/* col 1 */}
          <motion.div
            className="col-span-4 lg:col-span-2 lg:row-span-2 rounded-lg p-5 flex flex-col gap-5 items-center justify-center dracula-bg"
            transition={{ duration: 0.5, type: "tween" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* image and info  */}
            <div className="flex flex-col lg:flex-row lg:h-48 w-full items-center lg:justify-between gap-5 p-5">
              {/* image */}
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="w-48 flex justify-center items-center"
              >
                <img
                  className="bg-white rounded-full p-3 w-full h-full"
                  src={Coin.image.large}
                  alt={params.id}
                />
              </motion.div>
              {/* details */}
              <div className="bg-white rounded-lg w-full h-full flex flex-wrap flex-col p-3">
                <div>{currency(Coin.market_data.current_price.usd)}</div>
              </div>
            </div>

            {/* description */}
            <div className="overflow-hidden rounded-xl h-full w-full">
              {Coin.description.en !== "" ? (
                <div
                  className="info-box w-full bg-white h-full text-justify p-5 overflow-y-scroll"
                  dangerouslySetInnerHTML={{ __html: Coin.description.en }}
                />
              ) : (
                <div className="info-box w-full bg-white h-full text-justify p-5 flex items-center justify-center">
                  <NoInfo />
                </div>
              )}
            </div>
          </motion.div>

          {/* col 2 */}
          <motion.div
            className="col-span-4 lg:col-span-3 lg:col-start-3 rounded-lg p-3 dracula-bg"
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          ></motion.div>

          {/* col 3 */}
          <motion.div
            className="col-span-4 lg:col-span-3 lg:col-start-3 rounded-lg p-3 dracula-bg"
            transition={{ duration: 0.5, type: "tween" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          ></motion.div>
        </div>
      )}
    </AnimatedPage>
  );
};

export { CoinInfo };
