"use client";

import { StoreContext } from "@/app/context";
import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useContext } from "react";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/stote/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

const NavLinks = () => {
  const { cartData } = useContext(StoreContext);

  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name}
            className=" flex gap-5 md:justify-start justify-center items-center bg-purple-200 p-1 md:p-5 
                rounded-md w-[50px] md:w-auto
                "
          >
            <IconComponent className="w-6 h-6" />
            {link.name === "Cart" && cartData && cartData.length > 0 ? (
              `${link.name} (${cartData.length})`
            ) : (
              <p className=" font-bold hidden md:block">{link.name}</p>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
