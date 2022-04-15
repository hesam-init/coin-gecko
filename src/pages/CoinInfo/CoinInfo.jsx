import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { Input, SegmentedControl } from "@mantine/core";
import { AnimatedPage } from "../../components/Animated/Animated";
import { LoadingEffect } from "../../components/Loading/LoadingEffect";
import { NoInfo } from "../../components/NoInfo/NoInfo";
import { currency } from "../../assets/currency/currency";
import { SwitchIcon } from "../../assets/icons/icon";
import "./coininfo.css";
import { NothingIcon, SocialIcon } from "../../components/Icon/Icon";

const CoinInfo = () => {
  // states
  const [Coin, setCoins] = useState([]);
  const [Loading, setLoader] = useState(true);
  const [Value, setValue] = useState("usd");
  const [Current, setCurrent] = useState(1);

  // get params
  let params = useParams();

  useLayoutEffect(() => {
    // change favico status
    const changeTitleInfo = (link, name) => {
      let docHead = document.getElementsByTagName("head")[0];
      // change fav
      let newLink = docHead.querySelector("#fav");
      newLink.href = `${link}`;
      // change title
      let newTitle = docHead.querySelector("title");
      newTitle.innerHTML = `${name}`;
    };

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
          setCoins(json);
        }
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
            <div className="flex flex-col lg:flex-row lg:h-96 w-full items-center lg:justify-between gap-5">
              {/* image */}
              <motion.div
                initial={{ y: 15 }}
                animate={{ y: -5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="w-48 lg:w-64 flex justify-center items-center"
              >
                <img
                  className="bg-white rounded-full p-3 w-full h-full"
                  src={Coin.image.large}
                  alt={params.id}
                />
              </motion.div>
              {/* details */}
              <div className="bg-white rounded-xl w-full h-full flex flex-wrap flex-col items-center justify-evenly gap-5 p-5">
                {/* amount */}
                <Input
                  icon={
                    <img
                      className="bg-white rounded-full"
                      src={Coin.image.large}
                      alt={params.id}
                      width="35"
                    />
                  }
                  className="w-full"
                  type="number"
                  placeholder="Enter amount"
                  variant="filled"
                  size="lg"
                  radius="lg"
                  onChange={(e) => {
                    setCurrent(e.target.value);
                  }}
                  defaultValue={1}
                />
                <div className="text-dracula-primary ">
                  <SwitchIcon />
                </div>
                {/* converted data */}
                <div className="w-full flex flex-col gap-3 bg-[#f1f3f5] p-1 rounded-lg">
                  <SegmentedControl
                    className="rounded-t-lg"
                    value={Value}
                    onChange={setValue}
                    data={[
                      { label: "$USD", value: "usd" },
                      { label: "€EURO", value: "eur" },
                    ]}
                  />
                  <div className="text-center">
                    {currency(
                      Coin.market_data.current_price[Value] * Current,
                      Value.toUpperCase()
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* description */}
            <div className="overflow-hidden rounded-xl h-80 lg:h-full w-full bg-white">
              {Coin.description.en !== "" ? (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    delay: 0.3,
                  }}
                  className="info-box w-full h-full text-justify p-5 overflow-y-scroll"
                >
                  <div
                    className="info-box-link"
                    dangerouslySetInnerHTML={{ __html: Coin.description.en }}
                  />
                </motion.div>
              ) : (
                <div className="info-box w-full bg-white h-full text-justify p-5 flex items-center justify-center">
                  <NoInfo />
                </div>
              )}
            </div>
          </motion.div>

          {/* col 2 */}
          <motion.div
            className="col-span-4 lg:col-span-2 lg:col-start-3 rounded-lg p-3 dracula-bg flex flex-col gap-5"
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex w-full bg-white rounded-lg p-3">
              <h1>Links And Socials :</h1>
            </div>
            <div className="rounded-lg px-3 w-full h-full flex justify-center items-center flex-wrap gap-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {/* twitter */}
                {Coin.links.twitter_screen_name !== "" ? (
                  <SocialIcon
                    type="fa"
                    iconName="fa-twitter"
                    path={`https://twitter.com/${Coin.links.twitter_screen_name}`}
                  />
                ) : (
                  <NothingIcon />
                )}

                {/* reddit */}
                {Coin.links.subreddit_url === "https://www.reddit.com" ? (
                  ""
                ) : Coin.links.subreddit_url !== "" ? (
                  <SocialIcon
                    type="fa"
                    iconName="fa-reddit"
                    path={Coin.links.subreddit_url}
                  />
                ) : (
                  <NothingIcon />
                )}

                {/* facebook */}
                {Coin.links.facebook_username !== "" ? (
                  <SocialIcon
                    type="fa"
                    iconName="fa-facebook"
                    path={`https://facebook.com/${Coin.links.facebook_username}`}
                  />
                ) : (
                  <NothingIcon />
                )}

                {/* github */}
                {Coin.links.repos_url.github[0] ? (
                  <SocialIcon
                    type="fa"
                    iconName="fa-github"
                    path={Coin.links.repos_url.github[0]}
                  />
                ) : (
                  <NothingIcon />
                )}
              </div>
            </div>
          </motion.div>

          {/* col 3 */}
          <motion.div
            className="col-span-4 lg:col-span-2 lg:col-start-3 rounded-lg p-3 dracula-bg"
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
