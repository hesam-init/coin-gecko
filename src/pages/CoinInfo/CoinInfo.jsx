import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { AnimatedPage } from "../../components/Animated/Animated";
import { useParams } from "react-router-dom";
import { LoadingEffect } from "../../components/Loading/LoadingEffect";
import "./coininfo.css";
import { NoInfo } from "../../components/NoInfo/NoInfo";

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
            `${json.name} ${json.market_data.current_price.usd} $`
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
            className="row-span-2 col-span-2 rounded-lg p-5 flex flex-col gap-5 items-center justify-center dracula-bg"
            transition={{ duration: 0.5, type: "tween" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* image and info  */}

            <div className="flex justify-between w-full">
              <motion.div
                initial={{ y: -5 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                <img
                  className="bg-white rounded-full p-3 w-52"
                  src={Coin.image.large}
                  alt={params.id}
                />
              </motion.div>
            </div>

            {/* description */}
            <div className="overflow-hidden w-full rounded-lg h-full border">
              {Coin.description.en !== "" ? (
                <div
                  className="info-box w-full bg-white h-full text-justify p-5 overflow-y-scroll font-bold"
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
            className="col-span-3 col-start-3 rounded-lg p-3 dracula-bg"
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            2
          </motion.div>

          {/* col 3 */}
          <motion.div
            className="col-span-3 col-start-3 rounded-lg p-3 dracula-bg"
            transition={{ duration: 0.5, type: "tween" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            3
          </motion.div>
        </div>
      )}
    </AnimatedPage>
  );
};

export { CoinInfo };
