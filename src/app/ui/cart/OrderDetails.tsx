"use client";
import { StoreContext } from "@/app/context";
import { TrashIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useContext } from "react";

const OrderDetails = () => {
  const { cartData } = useContext(StoreContext);
  let booksToBuy = cartData.filter((book: any) => book.type === "Buy");

  const priceToBuy = booksToBuy.reduce(
    (acc: any, book: any) => acc + book.sellPrice,
    0
  );

  const booksToRent = cartData.filter((book: any) => book.type === "Rent");
  const priceToRent = booksToRent.reduce(
    (acc: any, book: any) => acc + book.rentPrice,
    0
  );

  const deliveryCharges = 25;

  const totalAmount = priceToBuy + priceToRent + deliveryCharges;

  const handleRemoveBooks = (book: any) => {
    console.log(
      booksToBuy.filter((bookToBuy: any) => bookToBuy.id === book.id)
    );
  };

  return (
    <div className=" bg-slate-200 m-5 px-5 py-3 w-full  ">
      <h2 className="text-xl font-semibold mb-1">Order Details</h2>
      <div className=" flex justify-between  mb-4 ">
        {booksToBuy.length > 0 && (
          <div>
            <p className=" text-xl font-semibold">Books for Buying </p>
            {booksToBuy.map((book: any) => {
              return (
                <div key={book.title} className=" flex my-4 gap-5">
                  <Image
                    src={book.cover}
                    width={80}
                    height={50}
                    alt="cover_image"
                  />
                  <div className=" flex flex-col ">
                    <p>Title: {book.title} </p>
                    <p>Price: {book.sellPrice} </p>
                    <p>Quantity: 1 </p>
                    <TrashIcon
                      width={20}
                      className=" text-gray-700 cursor-pointer "
                      onClick={() => handleRemoveBooks(book)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {booksToRent.length > 0 && (
          <div>
            <p className=" text-xl font-semibold">Books for Renting </p>
            {booksToRent.map((book: any) => {
              return (
                <div key={book.title} className=" flex my-4 gap-5">
                  <Image
                    src={book.cover}
                    width={80}
                    height={50}
                    alt="cover_image"
                  />
                  <div className=" flex flex-col ">
                    <p>Title: {book.title} </p>
                    <p>Price: {book.rentPrice} </p>
                    <p>Quantity: 1 </p>
                    <TrashIcon
                      width={20}
                      className=" text-gray-700 "
                      onClick={() => {}}
                    />
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <p>Standard delivery charges of {deliveryCharges} INR</p>
      <p className=" font-bold text-xl ">Total amount is {totalAmount} INR </p>
    </div>
  );
};

export default OrderDetails;
