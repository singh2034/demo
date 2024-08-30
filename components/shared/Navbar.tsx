"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
}

const Navbar = ({ selectedCurrency, setSelectedCurrency }: NavbarProps) => {

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  return (
    <nav className="py-2 md:py-4 border-b">
      <div className="container flex items-center justify-between ">
        <div className="text-xl border-2 px-3 py-1 rounded-md border-black">
          Logo
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-2 px-4 py-2 rounded-md border-black flex items-center gap-2">
              {selectedCurrency} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleCurrencyChange("INR")}
              >
                &#8377; INR
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleCurrencyChange("USD")}
              >
                &#36; USD
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleCurrencyChange("EUR")}
              >
                &euro; EUR
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleCurrencyChange("GBP")}
              >
                &#163; GBP
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
