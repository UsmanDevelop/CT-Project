import React from "react";

const ThreeDayPromise = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Banner */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-bold text-orange-500">
          Delivery Across Pakistan Within 3 Days — Guaranteed!
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          We ensure fast, reliable deliveries so you can build customer trust
          and boost repeat orders.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition">
          Start Shipping with 3-Day Promise
        </button>
      </section>

      {/* Delivery Map/Infographic */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-orange-500">How It Works</h2>
        <p className="text-gray-400 mt-2">Seamless & Secure Deliveries</p>
        <div className="mt-10 flex justify-center">
          <img
            src="/images/delivery-map.png"
            alt="Delivery Coverage"
            className="w-3/4 md:w-1/2"
          />
        </div>
      </section>

      {/* Why Our 3-Day Promise Stands Out */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-orange-500">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[
            "Dedicated, trained delivery fleet.",
            "Rider accountability with status updates at every step.",
            "No fake returns — each parcel verified.",
            "Advanced tracking for total transparency.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
            >
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories + CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-orange-500">
          Success Stories
        </h2>
        <p className="text-gray-400 mt-2">
          See how our customers are achieving faster delivery timelines.
        </p>
        <div className="mt-10 flex justify-center">
          <img
            src="/images/success-stories.png"
            alt="Success Stories"
            className="w-3/4 md:w-1/2"
          />
        </div>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition">
          Book Your First Shipment Now!
        </button>
      </section>
    </div>
  );
};

export default ThreeDayPromise;
