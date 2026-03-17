import React from "react";
import img from '../../assets/income_graph.png'


export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <section className="w-123.5 px-6.5 text-[#161616]">
      <h1 className="text-2xl font-bold">Income</h1>

      <p className="text-[#4d4d4d]">
        Last <span className="underline font-bold">30 days</span>
      </p>

      <h2 className="text-[38px] font-black text-[#161616]">$2,260</h2>

      <img
        className="w-full max-w-125"
        src={img}
        alt="Income graph"
      />

      <div className="mt-15">
        <h3 className="font-bold text-[24px]">Your transactions (3)</h3>

        <p className="text-[#4d4d4d]">
          Last <span className="underline font-bold">30 days</span>
        </p>
      </div>

      <div>
        {transactionsData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white mb-7.5 px-7.25 py-8.75 rounded-md"
          >
            <h3 className="text-[36px] font-semibold m-0">${item.amount}</h3>

            <p className="font-medium text-[20px] text-[#4d4d4d]">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
