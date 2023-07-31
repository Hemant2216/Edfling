import React from "react";

function InvoiceFooter() {
  return (
    <footer className="grid grid-cols-1 gap-y-5 sm:gap-x-5 p-3 sm:p-5 sm:grid-cols-3 bg-edfling-green h-1/3 sm:h-1/4 w-full place-content-center sm:place-content-center text-white">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold"> Head Quater</h1>
        <p className="font-normal">AJAY KUMAR GARG</p>
        <p className="font-normal">ENGINEERING COLLEGE GZB</p>
        <p className="font-normal">(201014)</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">For Sales</h1>
        <p className="font-normal">contact@eatyourmeal.com</p>
        <p className="font-normal">+91 1800 123 555</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">For Technical</h1>
        <p className="font-normal">support@eatyourmeal</p>
        <p className="font-normal">+91 7078461092</p>
      </div>
    </footer>
  );
}

export default InvoiceFooter;
