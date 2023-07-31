import React from "react";

function Header({invoiceDate,invoiceID,invoiceTimeStamp}) {
  return (
    <header className="flex justify-between m-3 sm:m-5">
      <div></div>
      <div className="flex flex-col">
        <h1 className="text-green-700 font-medium text-2xl">INVOICE</h1>
        <p className="text-gray-600 text-md font-bold">{invoiceID}#2424342</p>
        <span className="flex font-medium text-gray-600 text-md ">
          {invoiceDate}12th July <p className="font-medium text-gray-600 text-md  ml-3 sm:ml-5">{invoiceTimeStamp}12:30</p>
        </span>
      </div>
    </header>
  );
}

export default Header;
