import { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import SubscribePopup from "../Popup/SubscribePopup";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Enter a valid email address");
      return;
    }

    setErrorMessage("");
    setIsSubscribe(true);
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex items-center" data-aos="fade-up">
            <input
              // data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className={`w-full p-3 border text-black ${
                errorMessage ? "border-red-500" : "border-gray-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className=" bg-white p-3 text-gray-500"
            >
              Notify
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
      <SubscribePopup
        isSubscribe={isSubscribe}
        setIsSubscribe={setIsSubscribe}
      />
    </div>
  );
};

export default Subscribe;
