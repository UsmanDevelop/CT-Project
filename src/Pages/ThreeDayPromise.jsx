import React from "react";
import NavBar from "../Components/NavBar";

const ThreeDayPromise = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
    <NavBar/>
      {/* Hero Banner */}
      <section className="text-center py-20 bg-gradient-to-b from-black to-gray-900 h-screen flex flex-col align-middle items-center">
        <h1 className="text-5xl font-bold text-orange-500">Delivery Across Pakistan Within 3 Days — Guaranteed!</h1>
        <p className="text-lg mt-4 text-gray-300">We ensure fast, reliable deliveries so you can build customer trust and boost repeat orders.</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-600">Start Shipping with 3-Day Promise</button>
      </section>
      
      {/* Delivery Map/Infographic */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-orange-500">Our Delivery Coverage</h2>
        <p className="text-gray-300 mt-4">We cover major cities and rural areas with our extensive delivery network.</p>
        <div className="mt-6">
          <img src="/path-to-map-image.png" alt="Delivery Map" className="mx-auto w-3/4 rounded-lg shadow-lg" />
        </div>
      </section>
      
      {/* Why Our 3-Day Promise Stands Out */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-orange-500">Why Choose Our 3-Day Promise?</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li>✅ Dedicated, trained delivery fleet.</li>
          <li>✅ Rider accountability with real-time status updates.</li>
          <li>✅ No fake returns — every parcel is verified.</li>
          <li>✅ Advanced tracking and reporting for transparency.</li>
        </ul>
      </section>
      
      {/* Success Stories + CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-orange-500">Success Stories</h2>
        <p className="text-gray-300 mt-4">See how brands achieved faster deliveries and improved customer satisfaction.</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-600">Book Your First Shipment Now!</button>
      </section>
    </div>
  );
};

export default ThreeDayPromise;
