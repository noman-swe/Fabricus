/* eslint-disable react/prop-types */

const SubscribePopup = ({ isSubscribe, setIsSubscribe }) => {
  
  if (!isSubscribe) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Subscription Confirmed! 🎉
        </h2>
        <p className="text-gray-600 mb-4">
          Thank you for subscribing! You&apos;ll now receive updates on new
          products.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition"
          onClick={() => setIsSubscribe(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubscribePopup;
