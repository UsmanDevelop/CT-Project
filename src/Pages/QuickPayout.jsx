import React from "react";
import NavBar from "./../Components/NavBar";

const QuickPayouts = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar/>
      {/* Hero Section */}
      <section className="text-center py-16 h-screen bg-radial-[at_20%_28%] from-[#2b180a] to-20% flex flex-col align-middle justify-center items-center gap-10">
        <h1 className="text-4xl font-bold text-orange-500 ">
          Fastest Payouts in the Industry
        </h1>
        <p className="text-gray-300 mt-4 w-[50%] text-lg ">
        Experience seamless expense management and transparent accounting with our Business Suite, ensuring smooth day-to-day operations. Plus, enjoy guaranteed fund transfers within 48 hours of successful delivery—every time!
        </p>
        <button className="mt-6 bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">
          Sign Up for QuickPayouts
        </button>
      </section>

      {/* Pain Point Highlight */}
      <section className="max-w-3xl mx-auto text-center py-12 h-screen flex flex-col align-middle justify-center items-center gap-10">
        <h2 className="text-2xl font-bold text-orange-500">Tired of weeks-long payout delays?</h2>
        <ul className="mt-6 space-y-3 text-gray-300">
          <li>✔️ With Rabbit, your funds are never stuck.</li>
          <li>✔️ Automatic transfers within 48 hours — no exceptions.</li>
        </ul>
        <button className="mt-6 bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">
          Sign Up for QuickPayouts
        </button>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto text-center py-12 h-screen flex flex-col align-middle justify-center items-center gap-10">
        <h2 className="text-2xl font-bold text-orange-500">How It Works</h2>
        <ol className="mt-6 space-y-4 text-gray-300 list-decimal list-inside">
          <li>Delivery status is confirmed.</li>
          <li>Our system instantly processes your payout.</li>
          <li>Funds are transferred directly to your bank account.</li>
          <li>Full reporting available inside Rabbit Connect.</li>
        </ol>
      </section>

      {/* Testimonials & CTA */}
      <section className="max-w-3xl mx-auto text-center py-12 h-screen flex flex-col align-middle justify-center items-center gap-10">
        <h2 className="text-2xl font-bold text-orange-500">What Our Clients Say</h2>
        <p className="mt-4 text-gray-300 italic">"Rabbit's payouts are truly fast and reliable!" - Happy Client</p>
        <button className="mt-6 bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default QuickPayouts;
