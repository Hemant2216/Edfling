import React from "react";
import  Paid  from "../../images/Invoice/image 72Paid.png";

function OrderDetails() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 m-3 sm:m-5 font-medium gap-y-10 gap-x-3 sm:gap-x-5">
        <div className="space-y-2 sm:space-y-4 ">
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Order ID</h3>:<h3 className="text-blue-600">45436q46</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Order Date</h3>:<h3>12th july 1774</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Course</h3>:
            <h3 className="line-clamp-1">Learning Python with Fundamentals</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Plan Type</h3>:<h3>Basic</h3>
          </div>
        </div>
        <div className="space-y-2 sm:space-y-4">
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3> Customer Name</h3>:<h3 className="font-bold">PRASENJEET</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Delivery Date</h3>:<h3>12th july 1774</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Price Per plan</h3>:<h3 className="font-bold">17000 INR</h3>
          </div>
          <div className="flex space-x-3 sm:space-x-4 justify-start items-center">
            <h3>Plan Type</h3>:<h3>Basic</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center mx-3 sm:mx-5 font-medium space-y-10 space-x-3 sm:space-x-5">
        <img className="h-40 w-40 m-3" src={Paid}/>
        <div className="space-y-2 sm:space-y-4 ">
          <div className="flex space-x-1 sm:space-x-4 justify-start items-center">
            <h3>Sub Total</h3>:<h3>17000 INR</h3>
          </div>
          <div className="flex space-x-1 sm:space-x-4 justify-start items-center">
            <h3>GST</h3>:<h3>9%</h3>
          </div>
          <div className="flex space-x-1 sm:space-x-4 justify-start items-center">
            <h3>CGST</h3>:<h3>9%</h3>
          </div>
          <div className="flex space-x-1 sm:space-x-4 justify-start items-center">
            <h3>Delivery Charges</h3>:<h3>1000 INR</h3>
          </div>
          <div className="flex space-x-1 sm:space-x-4 justify-start items-center">
            <h3>Total</h3>:<h3>18000 INR</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
