"use client";

import { useState } from "react";
import { ecom_data } from "@/components/assets/ecom";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

const Home = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  return (
    <>
      <Navbar
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <main>
        <div className="py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ecom_data.map((item, index) => (
                <div
                  key={index}
                  className="p-6 w-full h-full border-2 rounded-lg"
                >
                  <div className="space-y-5">
                    <div>
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        alt="product"
                      />
                    </div>
                    <div>{item.heading}</div>
                    <div>{item.description}</div>
                    <div>
                      {selectedCurrency === "INR" && item.INR}
                      {selectedCurrency === "USD" && item.USD}
                      {selectedCurrency === "EUR" && item.EUR}
                      {selectedCurrency === "GBP" && item.GBP}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
