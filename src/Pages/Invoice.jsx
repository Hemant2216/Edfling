import React from "react";
import Header from "../Components/Invoice/Header";
import Body from "../Components/Invoice/Body";
import OrderDetails from "../Components/Invoice/OrderDetails";
import InvoiceFooter from "../Components/Invoice/InvoiceFooter";

function Invoice() {
  return (
    <>
      
      <div className="flex flex-col items-center">
        <Header />
        <Body />
        <OrderDetails />
      </div>
      <InvoiceFooter />
    </>
  );
}

export default Invoice;
